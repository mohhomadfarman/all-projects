figma.showUI(__html__);
figma.ui.resize(689, 446);
figma.ui.onmessage = (pluginMessage) => {
  console.log(pluginMessage.selectItems);
  if (pluginMessage.selectItems === "Bootstarp") {
    console.log(" Bootstrap Is Selected");

    const frameNode = figma.createFrame();
    frameNode.x = 100;
    frameNode.y = 100;

    frameNode.resize(1440, 1080);

    frameNode.layoutMode = "VERTICAL";
    frameNode.layoutGrids = [
      {
        // offset: 16,
        pattern: "COLUMNS", // Use columns pattern
        sectionSize: 1032 / 12, // Specify the column size based on the 12-column grid system
        visible: true, // Set the grid as visible
        alignment: "CENTER", // Align the columns to the left
        gutterSize: 24, // Set the gutter size between columns
        count: 12,
      },
    ];

    figma.currentPage.appendChild(frameNode);

    // Select the frame to make the grid visible
    figma.currentPage.selection = [frameNode];
  } 
  if (pluginMessage.selectItems === "Talwind") {
    console.log(" Talwind Is Selected");
    const frameNode = figma.createFrame();
    frameNode.x = 100;
    frameNode.y = 100;
    frameNode.resize(1440, 1080);
    frameNode.layoutMode = "VERTICAL";
    frameNode.layoutGrids = [
      {
        // offset: 16,
        pattern: "COLUMNS", // Use columns pattern
        sectionSize: 1032 / 12, // Specify the column size based on the 12-column grid system
        visible: true, // Set the grid as visible
        alignment: "CENTER", // Align the columns to the left
        gutterSize: 30, // Set the gutter size between columns
        count: 12,
      },
    ];
    figma.currentPage.appendChild(frameNode);
    // Select the frame to make the grid visible
    figma.currentPage.selection = [frameNode];
  }
  
};
