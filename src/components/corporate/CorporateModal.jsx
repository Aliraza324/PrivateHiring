import { useState } from 'react';
import { IconClose, IconCheck, IconBuilding } from '../common/Icons';

export const CorporateModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [estRides, setEstRides] = useState('10-30');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08080a]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#111114] border border-[rgba(243,241,234,0.15)] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#f3f1ea] my-8">
        <div className="flex items-center justify-between pb-4 border-b border-[rgba(243,241,234,0.1)]">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#ff3b1d]/20 text-[#ff3b1d] flex items-center justify-center">
              <IconBuilding className="w-4 h-4" />
            </span>
            <span className="font-display text-base uppercase tracking-wider text-[#f3f1ea]">
              Corporate Account Enquiry
            </span>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 text-[#807f78] hover:text-[#f3f1ea] rounded-lg hover:bg-[#17171b] transition-colors"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto">
              <IconCheck className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl uppercase tracking-tight text-[#f3f1ea]">
              Enquiry Received
            </h3>
            <p className="text-xs text-[#807f78] max-w-sm mx-auto leading-relaxed">
              Thank you, {contactName || 'Valued Client'}. Our UK corporate accounts manager will review {companyName || 'your business'} requirements and respond within 2 business hours.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#17171b] hover:bg-[#202026] text-[#f3f1ea] font-semibold text-xs rounded-xl"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <p className="text-xs text-[#807f78]">
              Set up business invoicing, priority chauffeuring, and dedicated corporate travel rates for your enterprise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#807f78] mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Acme Legal LLP"
                  className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-2 text-xs text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#807f78] mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Sarah Jenkins"
                  className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-2 text-xs text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#807f78] mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@acme.co.uk"
                  className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-2 text-xs text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#807f78] mb-1">
                  Direct Phone
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="020 7000 0000"
                  className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-2 text-xs text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#807f78] mb-1">
                Estimated Monthly Journeys
              </label>
              <select
                value={estRides}
                onChange={(e) => setEstRides(e.target.value)}
                className="w-full bg-[#08080a] border border-[rgba(243,241,234,0.1)] rounded-xl px-3 py-2 text-xs text-[#f3f1ea] focus:outline-none focus:border-[#ff3b1d]"
              >
                <option value="1-10">1 - 10 journeys / month</option>
                <option value="10-30">10 - 30 journeys / month</option>
                <option value="30-100">30 - 100 journeys / month</option>
                <option value="100+">100+ journeys / month</option>
              </select>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                className="flex-1 py-3 bg-[#ff3b1d] hover:bg-[#ff6a3d] text-[#08080a] font-display text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                Submit Corporate Enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
