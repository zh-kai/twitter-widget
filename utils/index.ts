export const addScript = (src: string) => {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script')
      script.setAttribute('src', src)
      document.body.appendChild(script)
      script.addEventListener('load', () => resolve(1), false)
    } catch (error) {
      reject(error)
    }
  })
}
