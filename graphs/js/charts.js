/*
 * charts.js
 * Jeff Ondich, 20 May 2025
 *
 * Adapted from the plotly library samples.

 *   https://plotly.com/javascript/

 * The plotly library is Copyright 2012-2025, Plotly, Inc.
 * Licensed under the MIT license
 */

window.addEventListener("load", populateCharts);

function populateCharts() {
    populateLineChart();
    populateBarChart();
    populatePieChart();
}

function populateLineChart() {
    var trace1 = {
        x: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        y: [3, -2, 4, 9, 11, 14, 9],
        mode: 'lines',
        name: 'Mood',
        line: {
            color: 'rgb(200, 0, 0)',
            width: 2
        }
    };

    var trace2 = {
        x: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        y: [1, 2, 3, 5, 8, 13, 21],
        mode: 'lines',
        name: 'Fibonacci',
        line: {
            color: 'blue',
            width: 2
        }
    };

    var data = [ trace1, trace2 ];

    var layout = {
        title: {text: 'Line Chart'}
    };

    Plotly.newPlot('sample-line-chart', data, layout);
}

function populateBarChart() {
    var trace1 = {
        x: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        y: [3, -2, 4, 9, 11, 14, 9],
        type: 'bar',
        name: 'Mood',
        marker: {
            color: 'rgb(200, 0, 0)'
        }
    };

    var trace2 = {
        x: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        y: [1, 2, 3, 5, 8, 13, 21],
        type: 'bar',
        name: 'Fibonacci',
        marker: {
            color: 'blue'
        }
    };

    var data = [ trace1, trace2 ];

    var layout = {
        title: {text: 'Bar Chart'}
    };

    Plotly.newPlot('sample-bar-chart', data, layout);
}

function populatePieChart() {
    var data = [{
        labels: ['Capybara', 'Moose', 'Emu', 'Iguana'],
        values: [37, 14, 22, 30],
        type: 'pie',
        marker: {
            colors: ['red', 'yellow', 'blue', 'green']
        }
    }];

    var layout = {
        title: {text: 'Pie Chart'}
    };

    Plotly.newPlot('sample-pie-chart', data, layout);
}

