import { userType } from "@/types/types";

const apiUrlUser = "https://skypro-music-api.skyeng.tech/user/";

const signup = "signup/";
const login = "login/";
const token = "token/";
const tokenRefresh = "token/refresh/";

type SignupType = {
  email: string;
  username: string;
  passwordfirst: string;
};

type SigninType = {
  email: string;
  password: string;
};


export async function postRegUser({ email, passwordfirst }: SignupType) {
  const res = await fetch(apiUrlUser + signup, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: passwordfirst,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка");
  }
  const data = await res.json();

  return data;
}


export async function postAuthUser({ email, password }: SigninType) {
  const res = await fetch(apiUrlUser + login, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка");
  }
  const data = await res.json();
  return data;
}

export async function postToken({ email, password }: SigninType) {
  const res = await fetch(apiUrlUser + token, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const data = await res.json();
  return data;
}

export async function postRefreshToken({ refresh }: userType) {
  const res = await fetch(apiUrlUser + tokenRefresh, {
    method: "POST",
    body: JSON.stringify({
      refresh: refresh,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const data = await res.json();
  return data;
}
