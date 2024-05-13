import React from "react";

interface Filters {
  model: string;
  outputPerformance: string;
}

interface MongoDashboardProps {
  filters: Filters;
}

const MongoDashboard: React.FC<MongoDashboardProps> = ({ filters }) => {
  const style = {
    background: "#F1F5F4",
    border: "none",
    borderRadius: "2px",
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    width: "100%",
    height: "200vh",
  };

  const modelFilter =
    filters.model === "all"
      ? ""
      : encodeURIComponent(`"model":"${filters.model}"`) + ",";
  const performanceFilter =
    filters.outputPerformance === "all"
      ? ""
      : encodeURIComponent(
          `"outputPerformance":"${filters.outputPerformance}"`
        );
  const urlFilter = `${modelFilter}${performanceFilter}`;

  const src = `https://charts.mongodb.com/charts-project-0-zxnri/embed/dashboards?id=9ece4414-cd53-49c9-a984-bd8b7a20756c&filter={${urlFilter}}&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale`;

  return <iframe style={style} src={src} title="MongoDB Chart" />;
};

export default MongoDashboard;

// import React, { useEffect, useRef, useState } from "react";
// import ChartsEmbedSDK, { Dashboard } from "@mongodb-js/charts-embed-dom";

// interface ChartFilters {
//   [key: string]: any;
// }

// interface DashboardProps {
//   dashboardId: string;
//   charts: string[][];
//   chartFilters: ChartFilters;
//   sx?: React.CSSProperties;
// }

// const MongoDashboard: React.FC<DashboardProps> = ({
//   dashboardId,
//   charts,
//   chartFilters,
//   sx = {},
// }) => {
//   const [rendered, setRendered] = useState<boolean>(false);
//   const [dashboard, setDashboard] = useState<Dashboard | null>(null);
//   const chartDiv = useRef<HTMLDivElement>(null);
//   const sdk = new ChartsEmbedSDK({
//     baseUrl: "https://charts.mongodb.com/charts-project-0-cnovv",
//   });

//   useEffect(() => {
//     const initDashboard = async () => {
//       const dashboardInstance = sdk.createDashboard({
//         dashboardId,
//         showAttribution: false,
//         background: "transparent",
//         widthMode: "scale",
//         heightMode: "scale",
//       });

//       setDashboard(dashboardInstance);

//       if (chartDiv.current) {
//         try {
//           await dashboardInstance.render(chartDiv.current);
//           setRendered(true);
//         } catch (err) {
//           console.error("Error during Charts rendering:", err);
//         }
//       } else {
//         console.error(
//           "The chart div reference is null at the time of rendering."
//         );
//       }
//     };

//     initDashboard();
//   }, [dashboardId, sdk]);

//   useEffect(() => {
//     const applyFiltersToChart = async () => {
//       if (dashboard && rendered) {
//         charts.forEach(async (chartGroup, index) => {
//           chartGroup.forEach(async (chartId) => {
//             try {
//               const chart = await dashboard.getChart(chartId);
//               await chart.setFilter(chartFilters[index]);
//             } catch (err) {
//               console.error(
//                 "Error while applying filters to specific chart:",
//                 err
//               );
//             }
//           });
//         });
//       }
//     };

//     applyFiltersToChart();
//   }, [dashboard, charts, chartFilters, rendered]);

//   return (
//     <div
//       ref={chartDiv}
//       style={{
//         height: "200vh",
//         margin: "25px 10px",
//         backgroundColor: "#EEEE",
//         padding: "15px 0px",
//         borderRadius: "10px",
//         ...sx,
//       }}
//     />
//   );
// };

// export default MongoDashboard;
