export interface ContactFormData {
  fullName: string;
  company?: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface SendEmailResponse {
  success: boolean;
  id?: string;
  error?: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<SendEmailResponse> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || `Server responded with status ${response.status}`,
      };
    }

    return {
      success: true,
      id: data.id,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Failed to connect to the email service. Please try again.',
    };
  }
}
