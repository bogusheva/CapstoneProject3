//const stripe = require("stripe")(process.env.STRIPE_KEY);

("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order");

// module.exports = createCoreController("api::order.order", {
//   async create(ctx) {
//     try {
//       const {
//         orderId,
//         firstName,
//         lastName,
//         email,
//         phone,
//         address,
//         orderList,
//         summarySum,
//       } = ctx.request.body;
//       const newOrder = await strapi.query("order").create({
//         orderId,
//         firstName,
//         lastName,
//         email,
//         phone,
//         address,
//         orderList,
//         summarySum,
//       });
//       ctx.send(newOrder);
//     } catch (error) {
//       ctx.throw(500, error);
//     }
//   },
//   async find(ctx) {
//     try {
//       const orders = await strapi.query("order").find();
//       ctx.send(orders);
//     } catch (error) {
//       ctx.throw(500, error);
//     }
//   },
// });

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//   async create(ctx) {
//     const { firstName, lastName, email, phone, address, orderList } =
//       ctx.request.body;
//     try {
//       const session = stripe.checkout.create({
//         mode: "payment",
//         success_url: `${process.env.CLIENT_URL}?success=true`,
//         cancel_url: `${process.env.CLIENT_URL}?success=false`,
//       });
//     } catch (err) {
//       ctx.response.status = 500;
//       return err;
//     }
//   },
// }));
