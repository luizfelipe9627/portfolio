import { z } from "zod";

export const nameSchema = z
  .string()
  .min(1, "Campo obrigatório.")
  .max(255, "O nome deve ter no máximo 255 caracteres.");

export const emailSchema = z
  .string()
  .min(1, "Campo obrigatório.")
  .email("Formato de e-mail inválido.")
  .max(255, "O e-mail deve ter no máximo 255 caracteres.");

export const subjectSchema = z
  .string()
  .min(1, "Campo obrigatório.")
  .max(255, "O assunto deve ter no máximo 255 caracteres.");

export const messageSchema = z
  .string()
  .min(1, "Campo obrigatório.")
  .max(255, "A mensagem deve ter no máximo 255 caracteres.");
