import { useNavigate } from "react-router-dom";
import { useMask } from "@react-input/mask";
import { useMailStore, type Mail } from "../api/mail";
import { PACKAGE_OPTIONS } from "../env/contact.env";
import Swal from "sweetalert2";

export const useMailForm = () => {
  const { contactSendMail } = useMailStore();
  const navigate = useNavigate();

  const phoneRef = useMask({
    mask: "(+52) ___ ___ ____",
    replacement: { _: /\d/ },
  });
  const validateName = (value: string) => {
    if (!value) return "Escribe tu nombre es obligatorio";
    return null;
  };
  const validateEmail = (value: string) => {
    if (!value) return "El correo es obligatorio";
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(value))
      return "El formato del correo no es válido";
    return null;
  };
  const validatePhone = (value: string) => {
    if (!value.trim()) return "El celular es obligatorio";
    if (!/^\(\+52\)\s\d{3}\s\d{3}\s\d{4}$/.test(value))
      return "Necesitas escribir tu teléfono completo";
    return null;
  };
  const validateStatusMail = (value: string) => {
    if (!value) return "Asunto de correo es obligatorio";
    return null;
  };
  const validateMailMsj = (value: string) => {
    if (!value) return "Escribe algún mensaje";
    return null;
  };

  const setMailPayload = (packageId: number, mail: Mail): void => {
    const selectedPackageLabel =
      PACKAGE_OPTIONS.find((pkg) => pkg.id === packageId)?.label ?? "";
    const payload = {
      ...mail,
      package: selectedPackageLabel,
    };
    contactSendMail(payload);
  };

  const successMessage = () => {
    Swal.fire({
      icon: "success",
      titleText: "Mensaje enviado!",
      text: "Nos comunicaremos contigo a la brevedad",
      timer: 8000,
      timerProgressBar: true,
      willClose: () => {
        navigate("/");
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        navigate("/");
      }
    });
  };

  return {
    phoneRef,
    setMailPayload,
    validateEmail,
    validatePhone,
    validateName,
    validateStatusMail,
    validateMailMsj,
    successMessage,
  };
};
