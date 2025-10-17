import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, createContactEmailTemplate, ContactFormData } from '@/lib/email';

export async function GET() {
  return NextResponse.json(
    { 
      message: 'API Contact - Méthode POST requise',
      methods: ['POST'],
      description: 'Endpoint pour envoyer des messages de contact'
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    
    // Validation basique
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Créer et envoyer l'email
    const emailTemplate = createContactEmailTemplate(data);
    const success = await sendEmail(emailTemplate);

    if (success) {
      return NextResponse.json(
        { message: 'Message envoyé avec succès' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
