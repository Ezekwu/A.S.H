<template>
  <section class="contact" id="contactid">
    <p class="contact_left">
      <span class="contact_span">[</span>Contact US<span class="contact_span"
        >]</span
      >
    </p>
    <div class="contact_right">
      <h3>
        Ready to expand your world? <br />
        Let's make something unforgettable.
      </h3>

      <form class="form" @submit.prevent="handleSubmit" novalidate>
        <div>
          <div class="input_group">
            <input
              v-model="form.name"
              type="text"
              id="contact-name"
              name="name"
              class="contact_input"
              :class="{ 'input_error': errors.name }"
              placeholder="Name"
              :disabled="status === 'loading'"
              required
            />
            <span v-if="errors.name" class="field_error">{{ errors.name }}</span>
          </div>

          <div class="input_group">
            <input
              v-model="form.email"
              type="email"
              id="contact-email"
              name="email"
              class="contact_input"
              :class="{ 'input_error': errors.email }"
              placeholder="Email address"
              :disabled="status === 'loading'"
              required
            />
            <span v-if="errors.email" class="field_error">{{ errors.email }}</span>
          </div>

          <div class="input_group">
            <input
              v-model="form.company"
              type="text"
              id="contact-company"
              name="company"
              class="contact_input"
              :class="{ 'input_error': errors.company }"
              placeholder="Company"
              :disabled="status === 'loading'"
            />
            <span v-if="errors.company" class="field_error">{{ errors.company }}</span>
          </div>

          <div class="input_group">
            <input
              v-model="form.projectType"
              type="text"
              id="contact-project-type"
              name="projectType"
              class="contact_input"
              placeholder="Project Type"
              :disabled="status === 'loading'"
            />
          </div>

          <div class="input_group">
            <textarea
              v-model="form.message"
              id="contact-message"
              name="message"
              class="contact_input"
              :class="{ 'input_error': errors.message }"
              placeholder="Message"
              :disabled="status === 'loading'"
              required
            />
            <span v-if="errors.message" class="field_error">{{ errors.message }}</span>
          </div>
        </div>

        <p v-if="errorMsg" class="contact_error">{{ errorMsg }}</p>
        <p v-if="status === 'success'" class="contact_success">
          Message sent! We'll be in touch soon.
        </p>

        <Button
          class="c_button"
          is-submit
          :label="status === 'loading' ? 'Sending…' : 'LET’S COLLABORATE'"
          :disabled="status === 'loading'"
        />
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { z } from "zod";

const form = reactive({
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  company: "",
  message: "",
});

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  company: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type Status = "idle" | "loading" | "success" | "error";
const status = ref<Status>("idle");
const errorMsg = ref("");

async function handleSubmit() {
  // Reset previous errors
  errors.name = "";
  errors.email = "";
  errors.company = "";
  errors.message = "";
  errorMsg.value = "";

  // Validate form
  const result = contactSchema.safeParse(form);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const path = issue.path[0] as keyof typeof errors;
      if (path in errors) {
        errors[path] = issue.message;
      }
    });
    return;
  }

  status.value = "loading";

  try {
    await $fetch("https://formspree.io/f/xwvypkjw", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: {
        name: form.name,
        email: form.email,
        company: form.company,
        projectType: form.projectType,
        message: form.message,
      },
    });

    status.value = "success";
    // Reset form fields
    form.name = "";
    form.email = "";
    form.company = "";
    form.projectType = "";
    form.message = "";

    setTimeout(() => {
      if (status.value === "success") status.value = "idle";
    }, 5000);
  } catch (err: any) {
    status.value = "error";

    const serverErrors = err?.data?.errors;
    if (Array.isArray(serverErrors) && serverErrors.length) {
      for (const e of serverErrors) {
        const field = e?.field as keyof typeof errors | undefined;
        const message = typeof e?.message === "string" ? e.message : "";
        if (field && field in errors && message) errors[field] = message;
      }
      if (!Object.values(errors).some(Boolean)) {
        errorMsg.value = "Something went wrong. Please try again.";
      }
    } else {
      errorMsg.value =
        err?.data?.error ??
        err?.data?.message ??
        err?.data?.statusMessage ??
        "Something went wrong. Please try again.";
    }

    setTimeout(() => {
      errorMsg.value = "";
      if (status.value === "error") status.value = "idle";
    }, 5000);
  }
}
</script>
