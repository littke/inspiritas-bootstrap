/*
 * A highcharts spline graph, customized for a nicer Inspiritas-look.
 *
 * All the options can be separated into a reusable object,
 * in order to create multiple charts with the same looks:
 * http://www.highcharts.com/documentation/how-to-use
 *
 * TODO: Design the tooltips when hovering items.
 */
new Highcharts.Chart({
    chart: {
        renderTo: 'mainChart',
        defaultSeriesType: 'spline',
        height: 250,
        plotBorderColor: '#e3e6e8',
        plotBorderWidth: 1,
        plotBorderRadius: 0,
        backgroundColor: '',
        spacingLeft: 0,
        plotBackgroundColor: '#FFFFFF',
        marginTop: 5,
        marginBottom: 35,
        zoomType: 'x,y'
    },

    /*
     * NOTE: Highcharts is FREE for non-commercial projects only,
     * and requires the credits ("Highcharts.com" in the corner).
     *
     * If you've purchased a license, you can remove the credit by
     * adding `enabled: false` to `credits`.
     *
     */
    credits: {
        style: {
            color: '#9fa2a5'
        }
    },

    title: {
        text: ''
    },

    legend: {
        align: 'left',
        floating: true,
        verticalAlign: 'top',
        borderWidth: 0,
        y: 3,
        x: 10,
        itemStyle: {
            fontSize: '11px',
            color: '#1E1E1E'
        }
    },

    yAxis: {
        title: {
            text: ''
        },
        gridLineColor: '#FAFAFA',
        opposite: true,
        labels: {
            style: {
                color: '#9fa2a5'
            }
        }
    },

    xAxis: {
        type: 'datetime',
        lineWidth: 0,
        maxZoom: 5 * 24 * 3600 * 1000, // 5 days
        tickInterval: 24 * 3600 * 1000, // 1 day
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%e', this.value);
            },
            x: 0,
            style: {
                color: '#9fa2a5'
            }
        }
    },

    plotOptions: {
        series: {
            marker: {
                lineWidth: 1, // The border of each point (defaults to white)
                radius: 4 // The thickness of each point
            },

            lineWidth: 3, // The thickness of the line between points
            shadow: false
        }
    },

    /*
     * Colors for the main lines.
     *
     * We recommend not using more lines than four in a single chart
     * like this one, but if you must, then make sure you add more colors
     * below, since otherwise you'll default to Highcharts' ugly colors :)
     */
    colors: [
        '#E35733', // orange
        '#4c97d7', // blue
        '#52d74c', // green
        '#e268de' // purple
    ],

    series: [ {
        pointStart: Date.UTC(2012,11,3),
        pointInterval: 24 * 3600 * 1000, // 1 day
        name: 'Purchases',
        marker: {
            symbol: 'circle'
        },
        // Just some random data. Replace this with your own.
        data: [4, 5, 8, 9, 10, 11, 10, 8, 7, 6, 9, 10, 13, 15, 16, 18, 15, 12, 10, 9, 8, 5, 8, 9, 10, 13, 15, 14]
    },{
        pointStart: Date.UTC(2012,11,3),
        pointInterval: 24 * 3600 * 1000, // 1 day
        name: 'Redemptions',
        marker: {
            symbol: 'circle'
        },
        // Just some random data. Replace this with your own.
        data: [0, 2, 3, 4, 5, 3, 2, 2, 3, 4, 6, 7, 8, 9, 10, 8, 11, 7, 5, 3, 4, 4, 1, 3, 4, 5, 8, 10]
    }]
});
