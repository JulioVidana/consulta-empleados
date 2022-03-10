const API = process.env.NEXT_PUBLIC_API_URL_LOGIN

const endPoints = {
  auth: {
    login: `${API}/api/cuentas/login`,
    profile: `${API}/api/cuentas/perfil`
  },
  accesos: {
    getListaAccesos: (id) => `${API}/api/cuentas/accesos/${id}`
  }
}

export default endPoints
