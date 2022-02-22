import { Router } from "express"
import { ensureAuthenticatedClient } from "./middlewares/ensureAuthenticateClient"
import { ensureAuthenticatedDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman"
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController"
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"
import { FindAllDeliveriesClientController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesClientController"
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController"
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController"
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController"
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController"
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController"
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController"

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const deliveryController = new CreateDeliveryController()
const findAllDeliveriesController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesClientController = new FindAllDeliveriesClientController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

routes.post("/client/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)

routes.post("/delivery", ensureAuthenticatedClient, deliveryController.handle)

routes.post("/client/", createClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)

routes.get("/delivery/available", ensureAuthenticatedDeliveryman, findAllDeliveriesController.handle)

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticatedDeliveryman, updateDeliverymanController.handle)

routes.get("/client/deliveries", ensureAuthenticatedClient, findAllDeliveriesClientController.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticatedDeliveryman, findAllDeliveriesDeliverymanController.handle)

routes.put("/delivery/updateEndDate/:id", ensureAuthenticatedDeliveryman, updateEndDateController.handle)

export { routes };
