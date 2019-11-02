module.exports = ({ router }) => {
  router.all(ctx => {
    return {
      status: 200
    };
  });
};
