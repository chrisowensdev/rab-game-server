var options = {
    path: 'year_2020/month_08/day_23/',
};

var mlbboxscores = new MLBBoxscores(options);
mlbboxscores.get((err, boxscores) => {
    console.log(boxscores);
});
