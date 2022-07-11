import HeroRepository from "../repositories/hero.js"
import HeroService from "../services/hero.js"

const generateInstance = ({
  filePath
}) => {
  //here goes all db connections
  const heroRepository = new HeroRepository({
    file: filePath
  })
  const heroService = new HeroService({
    heroRepository
  })

  return heroService
}

export {
  generateInstance
}