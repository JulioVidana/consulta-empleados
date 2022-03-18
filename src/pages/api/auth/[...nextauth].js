import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  theme: {
    colorScheme: "ligth", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "/static/logo-sistemasDIF.png" // Absolute URL to image
  },
  debug: true,
  secret: process.env.NEXT_PUBLIC_SECRET,
  site: process.env.NEXTAUTH_URL,
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: "Consulta de Empleados",
      credentials: {
        email: {
          label: "Nombre usuario",
          type: 'email',
          placeholder: 'escribe email'
        },
        password: {
          label: 'Contraseña',
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        }
        const API = process.env.NEXT_PUBLIC_API_URL_LOGIN

        const res = await fetch(`${API}/api/cuentas/login`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            accept: '*/*',
            "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          //console.log(res)
          if (res.status === 400) {
            throw new Error('Login Incorrecto')
          }
          throw new Error(res.statusText)
        }

        const data = await res.json()

        const { token, expiracion } = data

        // After sign-in, request data user to create session with a complete profile
        const userRequest = await fetch(`${API}/api/cuentas/perfil/${payload.email}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        const userData = await userRequest.json()



        // If no error and we have user data, return it
        if (userRequest.ok && userData) {
          const user = { ...userData, ...userData, token, expiracion };
          return user
        }

        // Return null if user data could not be retrieved
        return null

      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      //console.log('datos Callback: ', user)
      //console.log('token callback', token)

      if (user) {
        const { ...rest } = user;
        token.accessToken = user.token;
        //token.exp = user.expiracion;
        token.user = rest;
      }
      return token;
    },

    async session({ session, token }) {

      session.user = {
        ...session.user,
        ...token.user,
      };
      session.accessToken = token.accessToken;
      //session.expires = token.exp;
      return session;

    },
  },
})
