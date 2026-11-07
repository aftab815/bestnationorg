import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import Modal from './Modal';
import VolunteerForm from './VolunteerForm';
import BeneficiaryForm from './BeneficiaryForm';

const FormModalContext = createContext(null);

const FORM_CONFIG = {
  volunteer: { title: 'Become a Volunteer', Component: VolunteerForm },
  beneficiary: { title: 'Beneficiary Application', Component: BeneficiaryForm },
};

export const useFormModal = () => {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error('useFormModal must be used inside FormModalProvider');
  }
  return context;
};

export const FormModalProvider = ({ children }) => {
  const [activeForm, setActiveForm] = useState(null);

  const openForm = useCallback((type, source = 'site') => {
    if (!FORM_CONFIG[type]) return;
    setActiveForm({ type, source });
  }, []);

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  const value = useMemo(
    () => ({ openForm, closeForm, activeForm }),
    [openForm, closeForm, activeForm]
  );

  const config = activeForm ? FORM_CONFIG[activeForm.type] : null;
  const ActiveForm = config ? config.Component : null;

  return (
    <FormModalContext.Provider value={value}>
      {children}
      {activeForm && ActiveForm && (
        <Modal title={config.title} onClose={closeForm}>
          <ActiveForm source={activeForm.source} onClose={closeForm} />
        </Modal>
      )}
    </FormModalContext.Provider>
  );
};

export default FormModalProvider;
