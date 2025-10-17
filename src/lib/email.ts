// Service d'email pour les formulaires
// En production, intégrer avec SendGrid, Mailgun, ou un autre service

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export interface AdmissionFormData {
  // Informations élève
  studentName: string;
  studentBirthDate: string;
  studentGrade: string;
  previousSchool?: string;
  
  // Informations parent
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentAddress: string;
  parentOccupation?: string;
  
  // Informations complémentaires
  additionalInfo?: string;
}

// Simulation d'envoi d'email (à remplacer par un vrai service)
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // En production, remplacer par l'API de votre service d'email
    console.log('Email envoyé:', emailData);
    
    // Pour le développement, on simule un succès
    return true;
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return false;
  }
};

// Template pour email de contact
export const createContactEmailTemplate = (data: ContactFormData): EmailData => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Sujet:</strong> ${data.subject}</p>
      ${data.phone ? `<p><strong>Téléphone:</strong> ${data.phone}</p>` : ''}
      <h3>Message:</h3>
      <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">
        ${data.message.replace(/\n/g, '<br>')}
      </p>
      <hr style="margin: 20px 0;">
      <p style="color: #6b7280; font-size: 12px;">
        Message envoyé depuis le site web du Lycée Privé Asdrubal
      </p>
    </div>
  `;

  return {
    to: 'contact@asdrubal.edu.tn',
    subject: `[Site Web] ${data.subject} - ${data.name}`,
    html,
    text: `Nouveau message de ${data.name} (${data.email})\n\nSujet: ${data.subject}\n\nMessage:\n${data.message}`
  };
};

// Template pour email d'admission
export const createAdmissionEmailTemplate = (data: AdmissionFormData): EmailData => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Nouvelle demande d'inscription</h2>
      
      <h3 style="color: #374151;">Informations de l'élève</h3>
      <p><strong>Nom:</strong> ${data.studentName}</p>
      <p><strong>Date de naissance:</strong> ${data.studentBirthDate}</p>
      <p><strong>Niveau souhaité:</strong> ${data.studentGrade}</p>
      ${data.previousSchool ? `<p><strong>École précédente:</strong> ${data.previousSchool}</p>` : ''}
      
      <h3 style="color: #374151;">Informations du parent</h3>
      <p><strong>Nom:</strong> ${data.parentName}</p>
      <p><strong>Email:</strong> ${data.parentEmail}</p>
      <p><strong>Téléphone:</strong> ${data.parentPhone}</p>
      <p><strong>Adresse:</strong> ${data.parentAddress}</p>
      ${data.parentOccupation ? `<p><strong>Profession:</strong> ${data.parentOccupation}</p>` : ''}
      
      ${data.additionalInfo ? `
        <h3 style="color: #374151;">Informations complémentaires</h3>
        <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">
          ${data.additionalInfo.replace(/\n/g, '<br>')}
        </p>
      ` : ''}
      
      <hr style="margin: 20px 0;">
      <p style="color: #6b7280; font-size: 12px;">
        Demande envoyée depuis le site web du Lycée Privé Asdrubal
      </p>
    </div>
  `;

  return {
    to: 'admissions@asdrubal.edu.tn',
    subject: `[Admissions] Demande d'inscription - ${data.studentName}`,
    html,
    text: `Nouvelle demande d'inscription pour ${data.studentName}\n\nParent: ${data.parentName}\nEmail: ${data.parentEmail}\nTéléphone: ${data.parentPhone}`
  };
};
