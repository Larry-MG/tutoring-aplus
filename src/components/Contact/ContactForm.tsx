'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { FORMSPREE_ENDPOINT, SUBJECT_OPTIONS } from '@/lib/constants';
import Button from '../ui/Button';
import SuccessAnimation from './SuccessAnimation';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function isPhysicsSubject(subject: string) {
  return subject.toLowerCase().startsWith('physics');
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === 'submitting') return;

    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      alert(
        'Formspree endpoint is not configured. Please replace YOUR_FORM_ID in lib/constants.ts with your actual Formspree form ID.',
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setSelectedSubject('');
      } else {
        const data = await response.json();
        setErrorMessage(
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
            'Something went wrong. Please try again.',
        );
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <SuccessAnimation show />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {/* Full Name */}
      <div className="group relative">
        <input
          type="text"
          name="name"
          id="contact-name"
          required
          placeholder=" "
          className="peer w-full bg-transparent border-0 border-b border-[rgba(228,224,216,0.15)] px-0 py-3 text-chalk outline-none transition-colors focus:border-transparent"
        />
        <label
          htmlFor="contact-name"
          className="pointer-events-none absolute left-0 top-3 font-chalk text-chalk-dim transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-sage peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
        >
          Full Name *
        </label>
        {/* Chalk underline animation */}
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-sage transition-all duration-300 peer-focus:w-full" />
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Email */}
        <div className="group relative">
          <input
            type="email"
            name="email"
            id="contact-email"
            required
            placeholder=" "
            className="peer w-full bg-transparent border-0 border-b border-[rgba(228,224,216,0.15)] px-0 py-3 text-chalk outline-none transition-colors focus:border-transparent"
          />
          <label
            htmlFor="contact-email"
            className="pointer-events-none absolute left-0 top-3 font-chalk text-chalk-dim transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-sage peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
          >
            Email *
          </label>
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-sage transition-all duration-300 peer-focus:w-full" />
        </div>

        {/* Phone */}
        <div className="group relative">
          <input
            type="tel"
            name="phone"
            id="contact-phone"
            placeholder=" "
            className="peer w-full bg-transparent border-0 border-b border-[rgba(228,224,216,0.15)] px-0 py-3 text-chalk outline-none transition-colors focus:border-transparent"
          />
          <label
            htmlFor="contact-phone"
            className="pointer-events-none absolute left-0 top-3 font-chalk text-chalk-dim transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-sage peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
          >
            Phone (optional)
          </label>
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-sage transition-all duration-300 peer-focus:w-full" />
        </div>
      </div>

      {/* Subject — pill selector */}
      <div>
        <p className="font-chalk text-chalk-dim text-sm mb-3">Subject</p>
        <div className="flex flex-wrap gap-2">
          {SUBJECT_OPTIONS.map((subject) => {
            const isSelected = selectedSubject === subject;
            const physics = isPhysicsSubject(subject);

            return (
              <button
                key={subject}
                type="button"
                onClick={() => setSelectedSubject(subject)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-chalk transition-all duration-200 border',
                  isSelected
                    ? physics
                      ? 'bg-amber/20 border-amber text-amber'
                      : 'bg-sage/20 border-sage text-sage'
                    : 'border-[rgba(228,224,216,0.12)] text-chalk-dim hover:border-[rgba(228,224,216,0.25)] hover:text-chalk',
                )}
              >
                {subject}
              </button>
            );
          })}
        </div>
        {/* Hidden input to include in form data */}
        <input type="hidden" name="subject" value={selectedSubject} />
      </div>

      {/* Message */}
      <div className="group relative">
        <textarea
          name="message"
          id="contact-message"
          required
          rows={4}
          placeholder=" "
          className="peer w-full resize-none bg-transparent border-0 border-b border-[rgba(228,224,216,0.15)] px-0 py-3 text-chalk outline-none transition-colors focus:border-transparent"
        />
        <label
          htmlFor="contact-message"
          className="pointer-events-none absolute left-0 top-3 font-chalk text-chalk-dim transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-sage peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
        >
          Message *
        </label>
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-sage transition-all duration-300 peer-focus:w-full" />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        fullWidth
        disabled={status === 'submitting'}
        className="text-base py-3.5"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
