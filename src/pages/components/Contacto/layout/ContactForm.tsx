import { useEffect, useState, type FormEvent } from "react";
import { useMailStore } from "../../../../api/mail";
import { PACKAGE_OPTIONS } from "../../../../env/contact.env";
import type { ContactFormProps } from "../../../../env/types/contact.types";
import type { Mail } from "../../../../api/mail";
import { useSiteContext } from "../../../../context/hook/useSiteContext";
import { useMailForm } from "../../../../hooks/useMailForm";

export const ContactForm = ({ style }: ContactFormProps) => {
  const { packageSelected } = useSiteContext();
  const [packageId, setPackageId] = useState<number>(packageSelected ?? 0);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [mailMsjError, setMailMsjError] = useState<string | null>(null);
  const [statusMailError, setStatusMailError] = useState<string | null>(null);
  const {
    setMailPayload,
    phoneRef,
    validateEmail,
    validateName,
    validatePhone,
    validateStatusMail,
    validateMailMsj,
    successMessage,
  } = useMailForm();
  const { sendResponse, loading, clearSendResponse } = useMailStore();
  const [mail, setMail] = useState<Mail>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    package: "",
    message: "",
  });
  const mailForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMailPayload(packageId, mail);
  };
  useEffect(() => {
    if (sendResponse?.success) {
      successMessage();
      clearSendResponse();
    }
  }, [sendResponse, successMessage, clearSendResponse]);
  return (
    <>
      {loading ? (
        <div className={style.loading_container}>
          <div className={style.spinner} />
        </div>
      ) : (
        <form className={style.contact_form} onSubmit={mailForm}>
          <div className={style.form_group}>
            <label>Nombre</label>
            <input
              autoComplete="off"
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre (requerido)"
              value={mail.name}
              onChange={(e) =>
                setMail((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              onBlur={(e) => {
                setNameError(validateName(e.target.value));
              }}
              required
              disabled={loading}
              className={nameError ? style.input_error : ""}
            />
            {nameError && (
              <small className={style.error_text}>{nameError}</small>
            )}
          </div>
          <div className={style.form_group}>
            <label>Correo electrónico</label>
            <input
              autoComplete="off"
              id="email"
              name="email"
              type="email"
              pattern="^[^@]+@[^@]+\.[^@]+$"
              placeholder="correo@ejemplo.com (requerido)"
              value={mail.email}
              onChange={(e) =>
                setMail((prev) => ({
                  ...prev,
                  email: e.target.value.trim(),
                }))
              }
              onBlur={(e) => {
                setEmailError(validateEmail(e.target.value.trim()));
              }}
              onKeyDown={(e) => {
                if (e.key === " ") e.preventDefault();
              }}
              required
              disabled={loading}
              className={emailError ? style.input_error : ""}
            />
            {emailError && (
              <small className={style.error_text}>{emailError}</small>
            )}
          </div>
          <div className={style.form_group}>
            <label>Télefono celular</label>
            <input
              autoComplete="off"
              ref={phoneRef}
              id="phone"
              name="phone"
              type="text"
              pattern="^\(\+52\)\s\d{3}\s\d{3}\s\d{4}$"
              placeholder="Tu WhatsApp (requerido)"
              value={mail.phone}
              onChange={(e) =>
                setMail((prev) => ({
                  ...prev,
                  phone: e.target.value.trim(),
                }))
              }
              onBlur={(e) => {
                setPhoneError(validatePhone(e.target.value.trim()));
              }}
              required
              disabled={loading}
              className={phoneError ? style.input_error : ""}
            />
            {phoneError && (
              <small className={style.error_text}>{phoneError}</small>
            )}
          </div>
          <div className={style.form_group}>
            <label>Asunto</label>
            <input
              autoComplete="off"
              id="subject"
              name="subject"
              type="text"
              placeholder="Asunto del mensaje"
              value={mail.subject}
              onChange={(e) =>
                setMail((prev) => ({
                  ...prev,
                  subject: e.target.value,
                }))
              }
              onBlur={(e) => {
                setStatusMailError(validateStatusMail(e.target.value.trim()));
              }}
              required
              disabled={loading}
              className={statusMailError ? style.input_error : ""}
            />
            {statusMailError && (
              <small className={style.error_text}>{statusMailError}</small>
            )}
          </div>
          <div className={style.form_group}>
            <label htmlFor="subject">Paquete de interés</label>
            <select
              id="package"
              name="package"
              value={packageId}
              onChange={(e) => setPackageId(Number(e.target.value))}
              disabled={loading}
            >
              <option value="">Selecciona un paquete</option>

              {PACKAGE_OPTIONS.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.label}
                </option>
              ))}
            </select>
          </div>
          <div className={style.form_group}>
            <label>Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu proyecto"
              value={mail.message}
              onChange={(e) =>
                setMail((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              onBlur={(e) => {
                setMailMsjError(validateMailMsj(e.target.value.trim()));
              }}
              rows={5}
              required
              disabled={loading}
              className={mailMsjError ? style.input_error : ""}
            />
            {mailMsjError && (
              <small className={style.error_text}>{mailMsjError}</small>
            )}
          </div>
          <button
            className={style.form_button}
            type="submit"
            disabled={loading}
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </>
  );
};
