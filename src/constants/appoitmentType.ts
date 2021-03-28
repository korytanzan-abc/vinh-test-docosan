export interface AppoitmentType {
  appointment_id: number;
  requester: string;
  avatar: string | null;
  patient_id: number;
  symptom: string;
  start_time: string;
  end_time: string;
  status: string;
  color_code: string;
}
