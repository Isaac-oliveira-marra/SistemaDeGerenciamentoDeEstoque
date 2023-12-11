import { Router } from "express";
import { ativoRoutes } from "./ativoRoutes";
import { classeRoutes } from "./classeRoutes";
import { estoqueRoutes } from "./estoqueRoutes";
import { manutencaoRoutes } from "./manutencaoRoutes";
import { prestadorRoutes } from "./prestadorRoutes";
import { propietarioRoutes } from "./propietarioRoutes";

const routes = Router()

routes.use("/estoque", estoqueRoutes )
routes.use("/propietario", propietarioRoutes )
routes.use("/classe", classeRoutes )
routes.use("/ativo", ativoRoutes )
routes.use("/prestador", prestadorRoutes )
routes.use("/manutencao", manutencaoRoutes )
export { routes }