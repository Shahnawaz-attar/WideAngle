// frontend/app/components/AppointmentDrawer.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

const LottiePlayer = dynamic(() => import('react-lottie-player'), { ssr: false });

// Placeholder Lottie asset for success animation
import successAnimationData from '@/public/lottie/success-tick.json'; // Adjust path as needed

// Form Schema with Zod
const appointmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^\+?[0-9()\s-]{8,20}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date").optional().or(z.literal('')),
  message: z.string().optional(),
});

type AppointmentFormInputs = z.infer<typeof appointmentSchema>;

const AppointmentDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormInputs>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit: SubmitHandler<AppointmentFormInputs> = async (data) => {
    setSubmissionStatus('loading');
    setErrorMessage(null);
    try {
      // Simulate API call to /api/book
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong during booking.');
      }

      setSubmissionStatus('success');
      setTimeout(() => {
        setIsOpen(false);
        reset();
        setSubmissionStatus('idle');
      }, 3000); // Close drawer and reset after success animation
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to submit appointment.');
      setSubmissionStatus('error');
      setTimeout(() => setSubmissionStatus('idle'), 5000); // Clear error after 5 seconds
    }
  };

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'project-management', label: 'Project & Program Management' },
    { value: 'design-management', label: 'Design Management' },
    { value: 'construction-management', label: 'Construction Management' },
    { value: 'systems-integration', label: 'Systems Implementation' },
    { value: 'orat', label: 'Operational Readiness (ORAT)' },
    { value: 'other', label: 'Other' },
  ];

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on outside click
  // Fix: Added useEffect import
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const buttonContent = {
    idle: "Book Appointment",
    loading: (
      <motion.span
        key="loader"
        className="block w-6 h-6 border-2 border-t-2 border-white border-t-[#64ffda] rounded-full animate-spin"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        role="status"
        aria-label="Loading"
      />
    ),
    success: (
      <motion.div
        key="success"
        className="w-10 h-10 -my-2" // Adjust size to fit button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        <LottiePlayer
          loop={false}
          animationData={successAnimationData}
          play
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>
    ),
    error: "Try Again",
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-[#0ea5a4] text-[#1F2937] font-bold py-3 px-6 rounded-lg shadow-xl hover:bg-[#0ea5a4]/80 transition-all duration-[var(--dur-med)] ease-[var(--easing)] transform hover:scale-105"
        aria-label="Open appointment booking form"
      >
        Book Now
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-drawer-title"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" onClick={() => setIsOpen(false)} aria-hidden="true"></div>

            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              className="relative w-full max-w-md bg-[#1F2937] h-full p-8 shadow-2xl overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.2, 0.9, 0.3, 1] }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 id="appointment-drawer-title" className="text-3xl font-bold text-[#FBFBFA] font-poppins">Book an Appointment</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#64ffda] hover:text-[#0ea5a4]/80 focus:outline-none focus:ring-2 focus:ring-[#64ffda] rounded-md p-1"
                  aria-label="Close appointment form"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#FBFBFA] mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-[#FBFBFA] focus:ring-[#64ffda] focus:border-[#64ffda] outline-none"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#FBFBFA] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-[#FBFBFA] focus:ring-[#64ffda] focus:border-[#64ffda] outline-none"
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#FBFBFA] mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-[#FBFBFA] focus:ring-[#64ffda] focus:border-[#64ffda] outline-none"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#FBFBFA] mb-1">Preferred Service</label>
                  <select
                    id="service"
                    {...register('service')}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-[#FBFBFA] focus:ring-[#64ffda] focus:border-[#64ffda] outline-none appearance-none"
                    aria-invalid={errors.service ? "true" : "false"}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    {services.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#FBFBFA] mb-1">Preferred Date (Optional)</label>
                  <input
                    type="date"
                    id="date"
                    {...register('date')}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-[#FBFBFA] focus:ring-[#64ffda] focus:border-[#64ffda] outline-none"
                    aria-invalid={errors.date ? "true" : "false"}
                    aria-describedby={errors.date ? "date-error" : undefined}
                  />
                  {errors.date && (
                    <p id="date-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#FBFBFA] mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-[#FBFBFA] focus:ring-[#64ffda] focus:border-[#64ffda] outline-none"
                  ></textarea>
                </div>

                <div
                  className="sr-only" // Hidden visually but read by screen readers
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {submissionStatus === 'loading' && "Submitting your appointment."}
                  {submissionStatus === 'success' && "Appointment booked successfully!"}
                  {submissionStatus === 'error' && errorMessage && `Error: ${errorMessage}. Please try again.`}
                </div>

                <motion.button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-md font-bold transition-all duration-150 ease-[var(--easing)] flex justify-center items-center gap-2
                    ${submissionStatus === 'loading' || submissionStatus === 'success'
                      ? 'bg-gray-700 text-[#FBFBFA] cursor-not-allowed'
                      : 'bg-[#0ea5a4] text-[#1F2937] hover:bg-[#0ea5a4]/80'
                    }`}
                  disabled={submissionStatus === 'loading' || submissionStatus === 'success'}
                  // Morph CTA animation
                  initial={false}
                  animate={{
                    width: submissionStatus === 'loading' || submissionStatus === 'success' ? 'auto' : '100%',
                    borderRadius: submissionStatus === 'loading' || submissionStatus === 'success' ? '9999px' : '0.375rem', // rounded-full or rounded-md
                    paddingLeft: submissionStatus === 'loading' || submissionStatus === 'success' ? '1.5rem' : '1.5rem',
                    paddingRight: submissionStatus === 'loading' || submissionStatus === 'success' ? '1.5rem' : '1.5rem',
                  }}
                  transition={{ duration: 0.2, ease: [0.2, 0.9, 0.3, 1] }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={submissionStatus}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                    >
                      {buttonContent[submissionStatus]}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
                {submissionStatus === 'error' && errorMessage && (
                  <p className="mt-2 text-sm text-red-500 text-center" role="alert">{errorMessage}</p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppointmentDrawer;