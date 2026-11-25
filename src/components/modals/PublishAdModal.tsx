import React, { useState } from 'react';
import { X, Send, Megaphone, CheckCircle2 } from 'lucide-react';
import { DoodleMegaphone } from '../doodles/Doodles';

interface PublishAdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublishAdModal: React.FC<PublishAdModalProps> = ({ isOpen, onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [adTitle, setAdTitle] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-campus-bg border-2 border-campus-borderDark rounded-[32px] w-full max-w-lg shadow-brutal p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 bg-white border-2 border-campus-borderDark rounded-full flex items-center justify-center shadow-brutal-sm hover:bg-stone-100 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-3 animate-bounce" />
            <h3 className="font-display font-black text-2xl text-campus-text mb-2">
              Ad Request Received!
            </h3>
            <p className="text-sm font-semibold text-stone-600 max-w-xs mx-auto">
              Our campus ad manager will contact your phone ({phone}) via WhatsApp within 2 hours with campaign slots.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <DoodleMegaphone className="w-8 h-8" />
              <h2 className="font-display font-black text-2xl text-campus-text">
                Publish Your Campus Ad
              </h2>
            </div>
            <p className="text-xs font-semibold text-stone-600 mb-5">
              Promote your coaching, student cafe, hostel, PG, or college event directly in the student feed!
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-black uppercase text-stone-700 mb-1">
                  Business / Event Name
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Chai & Coding Cafe, Fergusson College Rd"
                  className="w-full px-4 py-2 bg-white border-2 border-campus-borderDark rounded-xl text-xs font-bold shadow-brutal-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black uppercase text-stone-700 mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-white border-2 border-campus-borderDark rounded-xl text-xs font-bold shadow-brutal-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-stone-700 mb-1">
                    WhatsApp Phone No.
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 bg-white border-2 border-campus-borderDark rounded-xl text-xs font-bold shadow-brutal-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-stone-700 mb-1">
                  Ad Headline & Offer
                </label>
                <input
                  type="text"
                  required
                  value={adTitle}
                  onChange={(e) => setAdTitle(e.target.value)}
                  placeholder="e.g. Flat 20% off for all engineering college ID holders"
                  className="w-full px-4 py-2 bg-white border-2 border-campus-borderDark rounded-xl text-xs font-bold shadow-brutal-sm focus:outline-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-campus-yellow hover:bg-campus-yellowHover text-black font-display font-black text-sm rounded-full border-2 border-campus-borderDark shadow-brutal flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Ad for Review</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
