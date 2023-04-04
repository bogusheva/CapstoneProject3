"use strict";

/**
 * order router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::order.order");

// module.exports = createCoreRouter("api::order.order", {
//   routes: [
//     {
//       method: "GET",
//       path: "/orders",
//       handler: async (ctx) => {
//         const orders = await strapi.services.order.find();
//         ctx.send(orders);
//       },
//     },
//     {
//       method: "POST",
//       path: "/orders",
//       handler: async (ctx) => {
//         try {
//           const {
//             orderId,
//             firstName,
//             lastName,
//             email,
//             phone,
//             address,
//             orderList,
//             summarySum,
//           } = ctx.request.body;

//           const newOrder = await strapi.services.order.create({
//             orderId,
//             firstName,
//             lastName,
//             email,
//             phone,
//             address,
//             orderList,
//             summarySum,
//           });

//           ctx.send(newOrder);
//         } catch (error) {
//           ctx.throw(500, error);
//         }
//       },
//     },
//   ],
// });
