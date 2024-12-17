# Crime Statistics Dashboard

## Objective
Analyze and visualize crime trends in India from 2003 to 2021 to understand regional variations.

## Tools and Libraries Used
- Python
- NumPy
- Pandas
- Matplotlib
- Seaborn

## Folder Structure
- `data/`: Contains raw and cleaned datasets.
- `src/`: Contains scripts for data preprocessing and visualization.
- `visuals/`: Contains saved plots.
- `output/`: Contains summarized data and reports.
- `docs/`: Contains project documentation.
- `assets/`: Contains screen recordings and videos.

## Execution Steps
1. Clone the repository.
2. Install the required libraries:
   ```bash
   pip install -r requirements.txt

         Team member 
1. Saud Rana 
2.  Krushnarajsinh sisodiya 
3. Jay Drangadhariya
4. Paras Panchal
5.  Jay Mallu
6. Dharma Patel

       Libraries are used in this project 
       1. pandas 
       2. Nampy 
       3. seashore
       4. Matplotlib 

       Crime statics Dashboard 

## Contributors
1. Saud Rana   (KU2407U366)_ Python coding 
2.  Krushnarajsinh Sisodiya (KU2407U322)_ Manage all the files, Manages main folder 
3.  Paras Panchal (KU2407U344)_ manage all the dataset,Contributor in python coding 
4.  Jay Drangadhariya (KU2407U)_ code execution and code screenshot 
5.   Jay Mallu (KU2407U301)_  manges bacground and design of working model 
6.  Dharma Patel (KU2407U) 
  

## Table of Contents
1. [Introduction]
2. [Objective]
3. [Tools and Libraries Used]
4. [Data Sources]
5. [Installation]
6. [Usage]
7. [Analysis and Insights]
8. [Visualizations]
9. [Challenges Faced]
10. [Contributors]
11. [License]

---

## Introduction
This project explores Forest cover loss  within India and globally. Using data-driven analysis, we aim to understand key trends, factors of Forest Cover loss , and the socio-economic impact. The project involves data preprocessing, statistical analysis, and visualization of Forst cover loss 

## Objective
The objective is to identify Crime statics Dashboard , uncover key insights, and present a clear understanding of patterns in population movement over time. 


# Data Sources
- (Include the datasets or public data repositories used for the project)
- Mention sources such as census data, Forest cover loss  reports, or any open datasets.

## Installation
1. Clone the repository:

   git clone https://github.com/[The_Tecno_]/ Crime_ Statistics_ Dashboard
.git 

2. Navigate to the project directory:

   cd  Crime_ Statistics_ Dashboard

3. Install the required libraries:

   pip install -r requirements.txt


## Usage
1. Load the Jupyter notebooks or Python scripts from the `src/` folder.
2. Execute the analysis scripts as described in the documentation.
3. View generated visualizations in the `visuals/` folder.

## Analysis and Insights
- Provide a summary of key findings, such as:
  - To analysis  Crime_ Statistics_ Dashboard analysis 
      
  

## Visualizations
- Include sample visualizations like:
  - Heatmaps Seasonal forest cover analysis 
  - Comparative bar charts for Seasonal forest cover analysis   

## Challenges Faced
- Data cleaning issues (e.g., missing or incomplete data) 
- Handling large datasets
- Visualizing complex Forest cover  loss analysis 


# Import necessary libraries
import numpy as np
import matplotlib.pyplot as plt
import rasterio
from rasterio.plot import show

# List of years with corresponding GeoTIFF file paths
years = [2020, 2021, 2022]  # Example years
file_paths = [f"Crime Statistics Dashboard
if" for year in years]  # Replace with actual file paths

# Initialize storage for deforested areas
deforested_areas = []

# Function to load GeoTIFF data
def load_raster(file_path):
    with rasterio.open(file_path) as src:
        data = src.read(1)  # Read the first band
        meta = src.meta  # Metadata for resolution
    return data, meta

# Process data for each pair of consecutive years
for i in range(len(file_paths) - 1):
    # Load raster data for the current year and next year
    current_data, meta = load_raster(file_paths[i])
    next_data, _ = load_raster(file_paths[i + 1]) 

    # Calculate forest change (deforestation)
    forest_change = next_data - current_data

    # Calculate deforested area (pixels with negative change)
    pixel_resolution = meta['transform'][0]  # Pixel size in meters
    deforested_area = np.sum(forest_change < 0) * pixel_resolution**2  # Area in square meters 
    deforested_areas.append(deforested_area)

    # Visualize the forest change
    plt.figure(figsize=(10, 6))
    show(forest_change, cmap='RdYlGn', title=C"Crime Statistics Dashboard
 ({years[i]}-{years[i+1]})")
    plt.colorbar(label="Change in Forest Cover")
    plt.show()

    # Print the calculated deforested area
    print(f"Deforested Area from {years[i]} to {years[i+1]}: {Crime static dashboard_analysis} square meters")

# Plot deforestation trend over years
plt.figure(figsize=(8, 5))
plt.plot(years[:-1], deforested_areas, marker='o', linestyle='-', color='red')
plt.title("Yearly Deforestation Trends")
plt.xlabel("Year")
plt.ylabel("Deforested Area (sq meters)")
plt.grid(True)
plt.show()

print("Analysis Complete!")

