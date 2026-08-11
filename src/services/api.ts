const BASE_URL = "https://reda-signup-signin-api.onrender.com";

export interface CreateUserPayload {
  email: string;
  username: string;
  contactNumber: string;
  password: string;
  confirmPassword: string;
}

export interface UserResponse {
  id: string;
  email: string;
  username: string;
  contactNumber: string;
  createdAt: string;
  links: {
    self: string;
    login: string;
  };
}

export interface CreateSessionPayload {
  identifier: string; // email or username
  password: string;
}

export interface SessionResponse {
  id: string;
  userId: string;
  tokenType: string;
  accessToken: string;
  expiresIn?: number | null;
  refreshToken?: string;
  refreshExpiresIn?: number;
  createdAt: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
  links: {
    self: string;
    user: string;
  };
}

export interface CreatePasswordResetPayload {
  email: string;
}

export interface PasswordResetResponse {
  id?: string;
  email?: string;
  expiresIn?: number;
  message: string;
  createdAt?: string;
  links?: {
    self: string;
  };
}

export interface ProblemDetails {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
  errors?: Array<{
    field?: string;
    code?: string;
    message?: string;
  }>;
}

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type");
  let data: any = {};
  
  if (contentType && contentType.includes("application/json")) {
    try {
      data = await response.json();
    } catch {
      // json parsing fallback
    }
  }

  if (!response.ok) {
    let errorMessage = "Request failed";
    
    if (data?.detail) {
      errorMessage = data.detail;
    } else if (Array.isArray(data?.errors) && data.errors.length > 0) {
      errorMessage = data.errors
        .map((err: any) => err.message || (err.field ? `${err.field}: error` : "Validation error"))
        .join(". ");
    } else if (data?.title) {
      errorMessage = data.title;
    } else if (response.status === 401) {
      errorMessage = "Invalid credentials. Please check your email/username and password.";
    } else if (response.status === 409) {
      errorMessage = "User with this email or username already exists.";
    } else if (response.status === 422) {
      errorMessage = "Invalid input details. Please check the fields.";
    } else if (response.status === 500) {
      errorMessage = "Server error. Please try again later.";
    }

    throw new Error(errorMessage);
  }

  return data as T;
}

// 1. User Registration (POST /api/v1/users)
export async function registerUser(payload: CreateUserPayload): Promise<UserResponse> {
  const response = await fetch(`${BASE_URL}/api/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<UserResponse>(response);
}

// 2. Create Session / Login (POST /api/v1/sessions)
export async function loginUser(payload: CreateSessionPayload): Promise<SessionResponse> {
  const response = await fetch(`${BASE_URL}/api/v1/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<SessionResponse>(response);
}

// 3. Password Reset Request (POST /api/v1/password-resets)
export async function requestPasswordReset(payload: CreatePasswordResetPayload): Promise<PasswordResetResponse> {
  const response = await fetch(`${BASE_URL}/api/v1/password-resets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<PasswordResetResponse>(response);
}

// 4. Google OAuth Authorization Start (GET /api/v1/oauth/google/authorization)
export async function getGoogleAuthUrl(redirectUri: string, state: string): Promise<string> {
  const url = new URL(`${BASE_URL}/api/v1/oauth/google/authorization`);
  url.searchParams.append("redirectUri", redirectUri);
  url.searchParams.append("state", state);

  const response = await fetch(url.toString(), {
    headers: {
      "Accept": "application/json",
    },
  });

  const data = await handleResponse<{ authorizationUrl: string }>(response);
  return data.authorizationUrl;
}
