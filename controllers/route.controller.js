const RoutingService = require('../services/routing.services');

const getRoute = (req, res)=>{
    const {from , to }= req.query;

    if(!from || !to){
        return res.status(400).json({error:'from and to required'});
    }

    const result = RoutingService.getRoute(from , to );

    res.json(result);
}

module.exports = {getRoute};