var documenterSearchIndex = {"docs":
[{"location":"#SPAC.jl","page":"Home","title":"SPAC.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SPAC module for Land model","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using SPAC","category":"page"},{"location":"API/#SPAC","page":"API","title":"SPAC","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"CurrentModule = SPAC","category":"page"},{"location":"API/#Types","page":"API","title":"Types","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"SPACContainer1L\nSPACContainer2L\nSPACMono\nSPACSimple","category":"page"},{"location":"API/#SPAC.SPACContainer1L","page":"API","title":"SPAC.SPACContainer1L","text":"mutable struct SPACContainer1L{FT}\n\nStruct that contains 1-layer gas exchange information.\n\nFields\n\nag\nMean gross photosynthetic rate [μmol m⁻² s⁻¹]\nan\nMean net photosynthetic rate [μmol m⁻² s⁻¹]\nc\nLeaf internal CO₂ partial pressure [Pa]\ne\nFlow rate per basal area [mol s⁻¹ m⁻²]\ngh\nLeaf diffusive conductance to H₂O [mol m⁻² s⁻¹]\np\nXylem end pressure [MPa]\nt\nLeaf temperature [K]\n\n\n\n\n\n","category":"type"},{"location":"API/#SPAC.SPACContainer2L","page":"API","title":"SPAC.SPACContainer2L","text":"mutable struct SPACContainer2L{FT}\n\nStruct that contains 2-layer gas exchange information.\n\nFields\n\ncont_sh\ncont_sl\nfrac_sh\nShaded layer fraction\nfrac_sl\nSunlit layer fraction\nla_sh\nShaded layer leaf area [m²]\nla_sl\nSunlit layer leaf area [m²]\nlai_sh\nShaded layer LAI\nlai_sl\nSunlit layer LAI\npar_sh\nShaded layer PAR [μmol m⁻² s⁻¹]\npar_sl\nSunlit layer PAR [μmol m⁻² s⁻¹]\nrad_sh\nShaded layer absorbed energy [W m⁻²]\nrad_sl\nSunlit layer absorbed energy [W m⁻²]\n\n\n\n\n\n","category":"type"},{"location":"API/#SPAC.SPACMono","page":"API","title":"SPAC.SPACMono","text":"mutable struct SPACMono{FT}\n\nStruct that mono species SPAC system.\n\nFields\n\nsoil_bounds\nSoil layers bounds [m]\nair_bounds\nAir layers bounds [m]\nz_root\nRoot depth [m]\nz_canopy\nCanopy maximal height [m]\nplant_hs\nPlant hydraulic system\nn_canopy\nNumber of canopy layers\nn_root\nNumber of root layers\nplant_ps\nPlant photosynthesis systems\nba\nBasal area [m²]\nga\nGround area [m²]\nla\nLeaf area [m²]\nenvirs\nAir layers\nmswc\nMaximal soil water content\nswc\nCurrent soil water content\np_soil\nArray of soil matric potential [MPa]\nh_soil\nMaximal soil depth [m]\nlatitude\nLatitude [°]\nlongitude\nLongitude [°]\nelevation\nElevation [m]\nphoto_set\nPhotosynthesis parameter set\nstomata_model\nStomatal behavior scheme\nangles\nSolar angle container\ncanopy_rt\nCanopy4RT container\nwl_set\nWave length container\nrt_dim\nRT dimensions\ncan_rad\nCanopyRads container\ncan_opt\nCanopyOpticals container\nleaves_rt\nArray of LeafBios container\nsoil_opt\nSoilOpticals container\nin_rad\nIncoming radiation container\nrt_con\nRT container\n\n\n\n\n\n","category":"type"},{"location":"API/#SPAC.SPACSimple","page":"API","title":"SPAC.SPACSimple","text":"mutable struct SPACSimple{FT}\n\nStruct that simplest mono species SPAC system, with 1 root, stem, and leaf.\n\nFields\n\nhs\nHydraulic systems\nec\nCritical flow rate\nps\nPhotosynthesis system\nmaxv\nStructure limit for maximal caboxylation rate\nvtoj\nRatio between Vcmax25 and Jmax25\nenvir\nEnvironmental conditions\ncontainer1L\nContainer for gas exchange for a layer\ncontainer2L\nContainer for gas exchange of sunlit and shaded layers\ncontainerKS\nContainer for default hydraulic conductance\ncontainerOP\nContainer for optimizer\nopt_f_sl\nContainer for optimal sunlit layer flow rate\nopt_f_sh\nContainer for optimal shaded layer flow rate\nopt_laba\nContainer for optimal leaf area per basal area\nopt_vmax\nContainer for optimal Vcmax25\nlai\nLeaf area index\nlaba\nLeaf area per basal area\ng_sla\nMaximal diffusive conductance limit at 25 °C\ngaba\nGround area per basal area\nwidth\nLeaf width\nmswc\nMaximal soil water content\nswc\nCurrent soil water content\np_soil\nSoil matrical water potential\nh_soil\nSoil depth, 2X mean root depth\nc_cons\nLeaf construction cost per leaf area\nc_vmax\nLeaf nutrient cost per Vcmax25 per leaf area\nlatitude\nLatitude [°]\nlongitude\nLongitude [°]\nelevation\nElevation [m]\n\n\n\n\n\n","category":"type"},{"location":"API/#Soil","page":"API","title":"Soil","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"soil_moisture_swc!\nsoil_moisture_p!\nsoil_moisture_p25!\nsoil_moisture!","category":"page"},{"location":"API/#SPAC.soil_moisture_swc!","page":"API","title":"SPAC.soil_moisture_swc!","text":"soil_moisture_swc!(node::SPACSimple{FT}, swc::FT) where {FT<:AbstractFloat}\n\nUpdate soil moisture and soil matrix potential, given\n\nnode SPACSimple type struct\nswc Given soil water content\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.soil_moisture_p!","page":"API","title":"SPAC.soil_moisture_p!","text":"soil_moisture_p!(node::SPACSimple{FT}, p::FT) where {FT<:AbstractFloat}\n\nUpdate soil moisture and soil matrix potential, given\n\nnode SPACSimple type struct\np Given soil maxtrix potential\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.soil_moisture_p25!","page":"API","title":"SPAC.soil_moisture_p25!","text":"soil_moisture_p25!(node::SPACSimple{FT}, p_25::FT) where {FT<:AbstractFloat}\n\nUpdate soil moisture and soil matrix potential, given\n\nnode SPACSimple type struct\np_25 Given soil maxtrix potential at 25 Celcius\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.soil_moisture!","page":"API","title":"SPAC.soil_moisture!","text":"soil_moisture!(node::SPACSimple{FT}, flow, dt=1.0) where {FT<:AbstractFloat}\n\nUpdate soil moisture and soil matrix potential, given\n\nnode SPACSimple type struct\nflow Mean outlet flow rate in [Kg h⁻¹]\nΔt Time period in [h]\n\n\n\n\n\n","category":"function"},{"location":"API/#Planet","page":"API","title":"Planet","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"atmospheric_pressure_ratio\natmospheric_pressure\nppm_to_Pa\nzenith_angle","category":"page"},{"location":"API/#SPAC.atmospheric_pressure_ratio","page":"API","title":"SPAC.atmospheric_pressure_ratio","text":"atmospheric_pressure(h::FT)\n\nCalculate the atmospheric pressure, given\n\nh elevation in [m]\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.atmospheric_pressure","page":"API","title":"SPAC.atmospheric_pressure","text":"atmospheric_pressure(h::FT)\n\nCalculate the atmospheric pressure, given\n\nh elevation in [m]\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.ppm_to_Pa","page":"API","title":"SPAC.ppm_to_Pa","text":"ppm_to_Pa(h::FT)\n\nConvert ppm to Pa, given\n\nh elevation in [m]\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.zenith_angle","page":"API","title":"SPAC.zenith_angle","text":"zenith_angle(latd::FT, decd::FT, lhad::FT) where {FT<:AbstractFloat}\nzenith_angle(latd::FT, day::FT, hour::FT, minute::FT) where {FT<:AbstractFloat}\n\nCalculate the zenith angle, given\n\nlatd Latitude in degree\ndecd Declination of the Sun in degree\nlhad Local hour angle in degree\nday Day of year\nhour Hour of day\nminute Minute of hour\n\n\n\n\n\n","category":"function"},{"location":"API/#Big-leaf-model","page":"API","title":"Big-leaf model","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"gain_risk_map\nleaf_gas_exchange_nonopt!\nleaf_gas_exchange!\noptimize_flows!\nbig_leaf_partition!\nradiative_conductance\nblack_body_emittance\nboundary_layer_conductance\nleaf_temperature\nleaf_temperature_sunlit\nleaf_temperature_shaded\nannual_profit\nannual_simulation!\ncreate_dataframe\ninitialize_spac_canopy!","category":"page"},{"location":"API/#SPAC.gain_risk_map","page":"API","title":"SPAC.gain_risk_map","text":"gain_risk_map(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}) where {FT<:AbstractFloat}\n\nReturn the matrix of optimizers at different sunlit and shaded layer flow     rates, given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type photosynthesis parameter set\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.leaf_gas_exchange_nonopt!","page":"API","title":"SPAC.leaf_gas_exchange_nonopt!","text":"leaf_gas_exchange_nonopt!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, flow::FT, par::FT, rad::FT, la::FT, container::SPACContainer1L{FT}) where {FT<:AbstractFloat}\nleaf_gas_exchange_nonopt!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, flow::FT) where {FT<:AbstractFloat}\nleaf_gas_exchange_nonopt!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, f_sl::FT, f_sh::FT) where {FT<:AbstractFloat}\n\nSimulate leaf level gas exchange and fill it into the container for 1-layer     or 2-layer canopy, given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type struct\nflow Flow rate per basal area into the leaves (e.g., for sunlit leaves)\nf_sl Flow rate per basal area into the sunlit leaves\nf_sh Flow rate per basal area into the shaded leaves\npar Leaf-level photosynthetic active radiation\nrad Leaf-level absorbed radiative energy\nla Leaf area of the leaves (total or each layer)\ncontainer [SPACContainer1L] type container\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.leaf_gas_exchange!","page":"API","title":"SPAC.leaf_gas_exchange!","text":"leaf_gas_exchange!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, flow::FT, par::FT, rad::FT, la::FT, container::SPACContainer1L{FT}) where {FT<:AbstractFloat}\nleaf_gas_exchange!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, flow::FT) where {FT<:AbstractFloat}\nleaf_gas_exchange!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, f_sl::FT, f_sh::FT) where {FT<:AbstractFloat}\n\nSimulate leaf level gas exchange and fill it into the container for 1-layer     or 2-layer canopy, given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type struct\nflow Flow rate per basal area into the leaves (e.g., for sunlit leaves)\nf_sl Flow rate per basal area into the sunlit leaves\nf_sh Flow rate per basal area into the shaded leaves\npar Leaf-level photosynthetic active radiation\nrad Leaf-level absorbed radiative energy\nla Leaf area of the leaves (total or each layer)\ncontainer [SPACContainer1L] type container\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.optimize_flows!","page":"API","title":"SPAC.optimize_flows!","text":"optimize_flows!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}) where {FT<:AbstractFloat}\n\nOptimize the flow rates in sunlit and shaded layers, given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type struct\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.big_leaf_partition!","page":"API","title":"SPAC.big_leaf_partition!","text":"big_leaf_partition!(node::SPACSimple{FT}, zenith::FT, r_all::FT) where {FT <:AbstractFloat}\n\nPartition the big-leaf canopy into sunlit and shaded layers, given\n\npartition Container for partition\nzenith Zenith angle in degree\nr_all Total radiation in [W m⁻²]\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.radiative_conductance","page":"API","title":"SPAC.radiative_conductance","text":"radiative_conductance(T::FT) where {FT<:AbstractFloat}\n\nReturn the radiative conductance of leaf, given\n\nT leaf temperature\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.black_body_emittance","page":"API","title":"SPAC.black_body_emittance","text":"black_body_emittance(T::FT) where {FT<:AbstractFloat}\n\nReturn the energy been radiated out, given\n\nT leaf temperature\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.boundary_layer_conductance","page":"API","title":"SPAC.boundary_layer_conductance","text":"boundary_layer_conductance(wind::FT, width::FT) where {FT<:AbstractFloat}\n\nReturn the boundary layer conductance, given\n\nwind Wind speed\nwidth Leaf width\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.leaf_temperature","page":"API","title":"SPAC.leaf_temperature","text":"leaf_temperature(node::SPACSimple{FT}, rad::FT, e_rad::FT, epla::FT) where {FT<:AbstractFloat}\nleaf_temperature(node::SPACSimple{FT}, rad::FT, flow::FT) where {FT<:AbstractFloat}\n\nReturn leaf temperature, given\n\nnode SPACSimple type struct\nrad Absorbed solar radiation per leaf area\ne_rad Emitted absorbed radiation per leaf area\nepla Flow rate per leaf area\nflow Total flow rate per basal area\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.leaf_temperature_sunlit","page":"API","title":"SPAC.leaf_temperature_sunlit","text":"leaf_temperature_sunlit(node::SPACSimple{FT}, rad::FT, f_sl::FT) where {FT<:AbstractFloat}\n\nReturn leaf temperature, given\n\nnode SPACSimple type struct\nrad Absorbed solar radiation per leaf area\nf_sl Total flow rate per basal area into sunlit leaves\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.leaf_temperature_shaded","page":"API","title":"SPAC.leaf_temperature_shaded","text":"leaf_temperature_shaded(node::SPACSimple{FT}, rad::FT, f_sh::FT) where {FT<:AbstractFloat}\n\nReturn leaf temperature, given\n\nnode SPACSimple type struct\nrad Absorbed solar radiation per leaf area\nf_sh Total flow rate per basal area into shaded leaves\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.annual_profit","page":"API","title":"SPAC.annual_profit","text":"annual_profit(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, weather::Array{FT,2}) where {FT<:AbstractFloat}\n\nCalculate the profit in the growing season so as to optimize leaf investment,     given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type struct\nweather Weather profile in a growing season\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.annual_simulation!","page":"API","title":"SPAC.annual_simulation!","text":"annual_simulation!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, weather::DataFrame, output::DataFrame) where {FT<:AbstractFloat}\n\nRun annual simulation for a growing season, given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type struct\nweather Weather profile in a growing season\noutput The predefined output result\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.create_dataframe","page":"API","title":"SPAC.create_dataframe","text":"function create_dataframe(FT, weather::DataFrame)\n\nCreate a data frame to storesimulation output, given\n\nFT Floating number type\nweather Weather profile in a growing season\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.initialize_spac_canopy!","page":"API","title":"SPAC.initialize_spac_canopy!","text":"initialize_spac_canopy!(node::SPACMono{FT}) where {FT<:AbstractFloat}\n\nInitialize the RT parameters for a given\n\nnode SPACMono type struct\n\n\n\n\n\n","category":"function"},{"location":"API/#Optimal-investment","page":"API","title":"Optimal investment","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"leaf_allocation!\noptimize_leaf!\noptimize_hs!","category":"page"},{"location":"API/#SPAC.leaf_allocation!","page":"API","title":"SPAC.leaf_allocation!","text":"leaf_allocation!(node::SPACSimple{FT}, laba::FT) where {FT<:AbstractFloat}\nleaf_allocation!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, vmax::FT) where {FT<:AbstractFloat}\nleaf_allocation!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, laba::FT, vmax::FT) where {FT<:AbstractFloat}\n\nUpdate leaf area and maximal carboxylation rate, given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type struct\nlaba Given leaf area per basal area\nvmax Given Vcmax25\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.optimize_leaf!","page":"API","title":"SPAC.optimize_leaf!","text":"optimize_leaf!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, weather::Array{FT,2}) where {FT<:AbstractFloat}\n\nOptimize leaf area (LAI limited to 20) and photosynthetic capacity, given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type struct\nweather Weather profile in a growing season\n\n\n\n\n\n","category":"function"},{"location":"API/#SPAC.optimize_hs!","page":"API","title":"SPAC.optimize_hs!","text":"optimize_hs!(node::SPACSimple{FT}, photo_set::AbstractPhotoModelParaSet{FT}, weather::Array{FT,2}) where {FT<:AbstractFloat}\n\nOptimize hydraulic conductance and leaf investment, given\n\nnode [SPACSimple] type struct\nphoto_set [AbstractPhotoModelParaSet] type struct\nweather Weather profile in a growing season\n\n\n\n\n\n","category":"function"}]
}
