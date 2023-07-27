// Sample data - Replace this with actual asset data from the back-end
const assets = [
    {
      id: 1,
      name: 'Laptop',
      type: 'Hardware',
      purchaseDate: '2023-07-20',
      warranty: '2025-07-20',
      location: 'Room 101',
      assignedTo: 'John Doe',
    },
    {
        id: 2,
        name: 'Iphone',
        type: 'Hardware',
        purchaseDate: '2023-07-20',
        warranty: '2025-07-20',
        location: 'Room 101',
        assignedTo: 'John Doe',
    },
    {
        id: 3,
        name: 'Power Bank',
        type: 'Hardware',
        purchaseDate: '2023-07-20',
        warranty: '2025-07-20',
        location: 'Room 101',
        assignedTo: 'John Doe',
      },
    // Add more asset objects here
  ];
  
  function generateAssetList() {
    const assetListSection = document.getElementById('assetList');
    assetListSection.innerHTML = '';
  
    assets.forEach((asset) => {
      const assetCard = document.createElement('section');
      assetCard.innerHTML = `
        <h2>${asset.name}</h2>
        <p>Type: ${asset.type}</p>
        <p>Purchase Date: ${asset.purchaseDate}</p>
        <p>Warranty: ${asset.warranty}</p>
        <p>Location: ${asset.location}</p>
        <p>Assigned To: ${asset.assignedTo}</p>
      `;
      assetListSection.appendChild(assetCard);
    });
  }
  
  // Call the function to generate the asset list when the page loads
  generateAssetList();
  