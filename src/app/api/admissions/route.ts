import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, createAdmissionEmailTemplate, AdmissionFormData } from '@/lib/email';

export async function GET() {
  return NextResponse.json(
    { 
      message: 'API Admissions - Méthode POST requise',
      methods: ['POST'],
      description: 'Endpoint pour envoyer les demandes d\'admission'
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    const data: AdmissionFormData = await request.json();
    
    // Validation basique
    if (!data.studentName || !data.studentBirthDate || !data.studentGrade || 
        !data.parentName || !data.parentEmail || !data.parentPhone || !data.parentAddress) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.parentEmail)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Créer et envoyer l'email
    const emailTemplate = createAdmissionEmailTemplate(data);
    const success = await sendEmail(emailTemplate);

    if (success) {
      return NextResponse.json(
        { message: 'Demande d\'inscription envoyée avec succès' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de la demande' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur API admissions:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
