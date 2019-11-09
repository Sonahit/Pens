module.exports = ({ router }) => {
  router.all("/", async (ctx, next) => {
    next();
  });
};
