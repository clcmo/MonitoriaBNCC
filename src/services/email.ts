import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface MensagemContato {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

// Dispara o e-mail de verdade via EmailJS — nenhuma senha ou backend envolvido.
// As três variáveis vêm do painel do EmailJS (ver .env.example).
export async function enviarMensagemContato(dados: MensagemContato): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS não está configurado. Defina VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY no arquivo .env.'
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: dados.nome,
      from_email: dados.email,
      subject: dados.assunto,
      message: dados.mensagem,
      to_email: 'monitoriaetecbraz@gmail.com',
    },
    { publicKey: PUBLIC_KEY }
  );
}
