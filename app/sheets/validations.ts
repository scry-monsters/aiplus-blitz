import { z } from "zod"

export const ConsultationRequest = z.object({
  name: z.string(),
  phone: z.string(),
})
