import { GetUsuarioController } from "../controllers/UsuarioControllers/GetUsuarioController";
import { ListUsuarioController } from "../controllers/UsuarioControllers/ListUsuarioController";
import { UpdateUsuarioController } from "../controllers/UsuarioControllers/UpdateUsuarioController";
import { UpdateSenhaUsuarioController } from "../controllers/UsuarioControllers/UpdateSenhaUsuarioController";
import { DeleteUsuarioController } from "../controllers/UsuarioControllers/DeleteUsuarioController";
import { Router } from "express";
import Container from "typedi";
import { middlewareAutenticacao } from "../middlewares/autenticacao";
import { middlewareAutorizacaoAdmin } from "../middlewares/autorizacaoAdmin";

const router = Router();

const listController = (): ListUsuarioController => {
  return Container.get<ListUsuarioController>("ListUsuarioController");
};

const getController = (): GetUsuarioController => {
  return Container.get<GetUsuarioController>("GetUsuarioController");
};

const updateController = (): UpdateUsuarioController => {
  return Container.get<UpdateUsuarioController>("UpdateUsuarioController");
};
const deleteController = (): DeleteUsuarioController => {
  return Container.get<DeleteUsuarioController>("DeleteUsuarioController");
};

const updateSenhaController = (): UpdateSenhaUsuarioController => {
  return Container.get<UpdateSenhaUsuarioController>(
    "UpdateSenhaUsuarioController"
  );
};

const createRouter = () => {
  router.use(middlewareAutenticacao);
  router.get("", (req, res) => listController().handle(req, res));
  router.get("/:id", (req, res) => getController().handle(req, res));
  router.put("/:id", (req, res) => updateController().handle(req, res));
  router.patch("", (req, res) => updateSenhaController().handle(req, res));
  router.delete("/:id", middlewareAutorizacaoAdmin, (req, res) =>
    deleteController().handle(req, res)
  );
  return router;
};

export default createRouter;
