/*eslint-disable*/
//https://shancarter.github.io/mr-data-converter/

//v5.31
var venderList = [
  ["Colored","Vender","Supplier","code","Buyer"],
  [0,338925,"4 Star Electronics","Disty","Distributor"],
  [1,337033,"ACI INDUSTRIES","s34","Diane Gonzales"],
  [1,335654,"ACUMENT (formelry CARMCAR LLC) (Belvedere)","s39","Glenn Grein"],
  [1,369815,"Advanced molding techonolgies Inc. (AMT)","s32","Shera Diaz"],
  [1,333740,"Allegro Microsystems","s41","Todd Foltz"],
  [1,337034,"Allied Technology","s34","Diane Gonzales"],
  [1,350975,"Alupress AG","s36","Garrett Grein"],
  [1,331184,"Analog devices INC.","s41","Todd Foltz"],
  [1,362639,"Aptiv Connection Systems","",""],
  [1,750022,"Delphi Automotiv Systems Austria ","S34","Diane Gonzales"],
  [1,379870,"Arnold Fastening Systems Inc. (Disty for Arnold Umform in USA)","S39","Glenn Grein"],
  [1,161624,"Arnold Umformtechnik GmbH & Co. KG","s39","Glenn Grein"],
  [0,330655,"Arrow Electronics Inc.","s37","Kyle Gonzales"],
  [1,342238,"Asia Pacific Microsystems Inc.","s44","Kyle Gonzales"],
  [0,335549,"Avnet Logistics (Formely Source Electronics)","s37","Kyle Gonzales"],
  [1,331247,"Avxs Corp","s32","Glenn - Connectors"],
  [1,370319,"Boardtech Electronics Coporation ","s36","Paul Merkel"],
  [1,300071,"Brema-Werk GmbH & Co. KG","s34","Diane Gonzales"],
  [1,352524,"Buhrke Industires Inc","s41","Todd Foltz"],
  [1,315971,"Capsonic ","s44","Kyle Gonzales"],
  [0,358376,"CCI - Commodity Components Internatonal ","s34","Diane Gonzales"],
  [0,351637,"Cetto Kunststoffverabeitung","",""],
  [0,330342,"Cinch Connector Div","s34","Diane Gonzales"],
  [1,331292,"Coilcraft Inc","S32","Shera Diaz"],
  [0,365302,"Csaba Metal RT","",""],
  [1,332838,"Cypress Semiconductor Corporation","S34","Diane Gonzales"],
  [0,376374,"Delo Industries Kiebstoffe GmbH&Co. K","",""],
  [1,338722,"Aptiv Services US, LLC (Was Delphi Packard electric systems)","S34","Diane Gonzales"],
  [0,332534,"Digi key corp","S32","Zoomie Marcantel"],
  [1,10005942,"Diodes Inc. ","S39","Glenn Grien"],
  [1,336664,"Diversified Converting Technologies","S41","Todd Foltz"],
  [1,357181,"Dynamic Electronics Co. Ltd","S36","Paul Merkel"],
  [1,558405,"Dynaplas LTD.","S44","Kyle Gonzales"],
  [0,356729,"Escseri KFT.","",""],
  [1,316325,"Elantas Beck GmbH","S34","Diane Gonzales"],
  [1,339944,"Elec & Eltek","S36","Paul Merkel"],
  [0,372309,"Ellington Innovative Technology Company Ltd","S36","Paul Merkel"],
  [1,384958,"Em Devices USA (owned by Kemet)","S34","Diane Gonzales"],
  [1,336991,"Em Microelectronic-Marin SA","S34","Diane Gonzales"],
  [1,128937,"Ensinger Gmbh","S36","Garrett Grein"],
  [1,310054,"EPT GmbH","S41","Todd Foltz"],
  [1,10005580,"Erwin Quarder Inc.","S34","Diane Gonzales"],
  [0,337028,"ES Plastics ","S34","Diane Gonzales"],
  [0,336765,"First Metals and plastics","s34","Diane Gonzales"],
  [0,334552,"Foxlink Internatonal Inc.","S34","Diane Gonzales"],
  [0,351891,"Fruilpress SAMP S.p.a","",""],
  [0,331733,"Futrue Electronic Corp","S36","Paul Merkel"],
  [0,338643,"Grand Haven Gasket Company ","S34","Diane Gonzales"],
  [1,336981,"GTR Enterprieses","S34","Diane Gonzales"],
  [1,352561,"GUL Technologies LTD.","S36","Paul Merkel"],
  [1,306270,"Haesealer Metall Technik GmH - HMT","S36","Paul Merkel"],
  [1,355017,"Hans Fleig Gmbh","S34","Diane Gonzales"],
  [1,502130,"Hatch Stamping Company","S41","Todd Foltz"],
  [1,352065,"HDK America Inc (See Hokuriku)","S44","Paul Merkel"],
  [1,533735,"HellermannTyton Corporation ","S34","Diane Gonzales"],
  [1,339236,"Henkel Corporation(Henkel Electron)","S34","Diane Gonzales"],
  [1,359060,"Henkel Electronic Materials ","S34","Diane Gonzales"],
  [1,369370,"Henkel Corporation ","S34","Diane Gonzales"],
  [1,360652,"Heraeus Material Technology ","S34","Diane Gonzales"],
  [1,330689,"Hisco Inc","S41","Todd Foltz"],
  [1,994822,"Humiseal Division Chase Corp","S34","Diane Gonzales"],
  [1,359102,"IDK Co. Ltd","S41","Todd Foltz"],
  [1,335656,"Infastech Decorah LLC","S39","Glenn Grein"],
  [1,331338,"Infineon Technologies ","S39","Glenn Grien"],
  [1,334902,"Integrated Silicon Solution, Inc. (ISSI)","S34","Diane Gonzales"],
  [1,337659,"Interplex Electronic Hangzhou","S44","Kyle Conzales"],
  [1,347159,"Interplex NAS Inc.","S44","Kyle Gonzales"],
  [1,336265,"IRC ","S32","Shera Diaz"],
  [1,347053,"IRISO USA Inc.","S39","Gleen Grien"],
  [1,304203,"Isabellenhuette ","S44","Kyle Gonzales"],
  [1,352960,"Jakson Die Casting, LLC (Keyston Jaskson Die Casting, LLC) (Formerly Internet)","S41","Todd Foltz"],
  [0,332655,"Jae Electronics","S34","Diane Gonzales"],
  [1,340001,"JD Norman Industires","S41","Todd Foltz"],
  [1,352016,"KCE America Inc","S36","Paul Merkel"],
  [1,335682,"KDS America (Daishinku)","S44","Kyle Gonzales"],
  [1,326781,"Kemet Electronics Corp","S32","Shera Diaz"],
  [0,352590,"Kester US","S40","Hisco"],
  [1,330967,"KOA Speer Electronics Inc","S34","Diane Gonzales"],
  [1,353430,"Krayden, INC","S34","Diane Gonzales"],
  [1,375637,"Kushan Yuanrnao Electornics (GBM)","S36","Paul Merkel"],
  [1,351953,"Kuroda Electic USA Inc. (SunCon) (Beginning Feb 2016 will supply Susumu Parts instead of Endrich)","S44","Kyle Gonzales"],
  [0,385996,"Kyocera International, Inc","S32","Shera Diaz"],
  [1,330700,"Laird Technologies (PA)","S36","Paul Merkel"],
  [1,332744,"Linear Technology corp","S34","Diane Gonzales"],
  [1,365683,"Ljunghall, S.r.o","",""],
  [1,330361,"Littlefuse Inc","S39","Glenn Grein"],
  [1,359484,"Mac Arthur Corporation","S41","Todd Foltz"],
  [0,367532,"Macronix International Co. Ltd.","S39","Glenn Grein"],
  [1,335805,"Makrite Parts Inc","???","???"],
  [1,350021,"Mansfield Manfacturing Company ","S41","Todd Foltz"],
  [1,335432,"Marian Fort worth ","S41","Todd Foltz"],
  [1,319269,"Marian, Inc.","S41 ","Todd Foltz"],
  [0,330595,"Matsuo Electronics ","S32","Shera Diaz"],
  [1,332707,"Mjaxim Intergrated Products INC.","S39","Glenn Grien"],
  [0,347114,"Meiko Electronics America, INC.","S36","Paul Merkel "],
  [1,323411,"Melexis GmbH","S44","Kyle Cgonzales"],
  [1,367172,"Mesit & Roeders v.o.s.","",""],
  [1,352959,"Metal Tech (Minneapolis Die casting, LLC)","S41","Todd Foltz"],
  [1,333998,"Micro Crystal ","S34","Diane Gonzales"],
  [1,331937,"Microchip technology incorpated","S34","Diane Gonzales"],
  [0,334850,"Micron Semiconductor Products INC.","S32","Shera Diaz"],
  [1,38296,"Mitsubishie Electric Surope B.V","S34","Diane Gonzales"],
  [0,338682,"Modern Metal & Refining LTD ","S41","Todd Foltz"],
  [1,337781,"Molex Connector Corporation","S39","Glenn Grien"],
  [1,366295,"Motecq Corporation (Replacing BeachMold)","S41","Toddd Foltz"],
  [0,332106,"Mouser Electronics (Disty for Vishay)","Disty","Distributor"],
  [1,331215,"Murata Electronics North America","S32","Shera Diaz"],
  [0,366383,"Mursix Corporation(previously Twoson Tools)","S34","Diane Gonzales"],
  [1,351078,"NAN YA Printed Circuit Board Corpor","S36","Paul Merkel"],
  [1,332210,"NDK America INC","S34","Diane Gonzales"],
  [1,347828,"Nedic America Corp","S41","Todd Foltz"],
  [0,385008,"Nedec Mexico S.A.de C.V","S41","Todd Foltz"],
  [1,382750,"Nexperia USA Inc","S35","John Richard Gentry"],
  [1,372380,"NGK Europe / Japan GMBH","S39","Glenn Grien"],
  [1,339739,"ngk Spark Plugs Usa Inc","S32","Shera Diaz"],
  [1,332091,"Nichicon America Corp","S32","Shera Diaz"],
  [1,558498,"Nifco America Corporation","S34","Diane Gonzales"],
  [1,376607,"Nissan Trading corporation Americas ","S34","Diane Gonzales"],
  [1,331653,"NXp Semiconductors USA Inc","S36","Pual Merkel"],
  [1,339449,"Pace Industries Div of Leggett","S41","Todd Foltz"],
  [1,331872,"Panasonic Industries Company","S44","Kyle Gonzales"],
  [1,330854,"Panasonic Industrial Devices Sales","S34","Diane Gonzales"],
  [1,331204,"Perfection Spring & Stamping corp","S41","Todd Foltz"],
  [0,332370,"PHB Die casting Inc","s41","Todd Foltz"],
  [1,324265,"Poeppelmann GmbH & Co. KG","S34","Diane Gonzales"],
  [0,380321,"Poeppelmann plastics USA LLC","S34","Dian Gonzales"],
  [0,380233,"Praxair Distribution INC","S40","Diane Gonzales"],
  [0,333363,"Praxair Inc","S40","Diane Gonzales"],
  [1,332354,"Quantum Piastics (Master molder porducts corp)","S41","Todd Foltz"],
  [1,380347,"RAMPF Group, Inc","",""],
  [0,339342,"Reliant gases LTD","S34","Diane Gonzales"],
  [1,337362,"Renesas Technology America, Inc.","S39","Gienn Grein"],
  [1,338420,"Robert Bosch Corp","S34","Diane Gonzales"],
  [1,331137,"ROHM Corp","S44","Paul Merkel"],
  [1,336720,"SAE power Inc","S32","Shera Diaz"],
  [1,334859,"Samsung Electro-Mechanics America","S32","Shera Diaz"],
  [1,91367,"Schreiner Group GmbH & Co.KG","S44","Paul Merkel"],
  [1,877605,"Schweizer Electronics AG ","S36","Garrett Grien"],
  [1,378269,"Schweizer Electronic Singapore PTE","S44","Kyle Gonzales"],
  [1,335788,"Semiconductor componets industires (On Semi)","S39","Glenn Grein"],
  [1,343961,"Senju Comteck Corp","S40","Diane Gonzales"],
  [1,341345,"SFS Intec. Inc.","S39","Glenn Grein"],
  [1,359459,"Shanghai FL Dai-ichi Autiomotive","S34","Diane Gonzales"],
  [1,385121,"Shanghai Rongzhen","",""],
  [1,389061,"Shangai Giesseng International","",""],
  [1,336949,"Shin-etsu Silicones of America ","S34","Diane Gonzales"],
  [1,353088,"Stackpole Electronic Inc (Ktronics)","S32","Shera Diaz"],
  [1,331806,"Steicroelectronics","S39","Glenn Grien"],
  [1,339273,"Sumida America Inc","S32","Shera Diaz"],
  [1,383335,"Suzhou Chunxing Precision","S41","Todd Foltz"],
  [1,350038,"Swoboda CZ S.r.O","S34","Diane Gonzales"],
  [1,340776,"Taiyo Yuden USA Inc (old v/c 333091)","S32","Shera Diaz"],
  [1,331275,"TDK Corp of America ","S32","Shera Diaz"],
  [1,335955,"TDK Electronics Inc. (Formely Epcos)","S32","Shera Diaz"],
  [1,335436,"Te Connectivity (Was Deutshch)","S39","Glenn Grein"],
  [1,363544,"Teledyne Dalsa ","S44","Paul Merkel"],
  [1,2002046,"Texas Instruments","S41","Todd Foltz"],
  [0,352600,"Thermoset lord chem prods opers","S40","Hisco"],
  [1,335589,"Toshiba America Electronic","S34","Diane Gonzales"],
  [1,343867,"Trend Technologies LCC","S39","Glenn Grein"],
  [1,351099,"Tripod Overseas Co. Ltd.","S36","Paul Merkel"],
  [1,500124,"Tro Manufacturing Co. Inc.","S41","Todd Foltz"],
  [1,356244,"Twin City Die Casting Company","S41","Todd Foltz"],
  [1,2001583,"Tyco ","S39","Paul Merkel"],
  [1,333751,"Unitech PCB corp (Shanghai Unitech)","S36","Garrett Grein"],
  [1,332077,"United Chemi Con INC (Nippon Chemi Con)","S32","Shera Diaz"],
  [1,350547,"Vacumschemlze GmbH & Co EG","S32","Shera Diaz"],
  [1,352530,"Viasystems Technologies Corp. LLC","S36","Paul Merkel"],
  [1,331103,"Vishay Americas Inc","S35","John Richard Gentry"],
  [1,357000,"VolaPlast GmbH & Co.KG","S44","Kyle Gonzales"],
  [1,331413,"W. L Gore & Associates, INC.","S34","Diane Gonzales"],
  [1,336600,"Wacker Chemical Corporation","S34","Diane Gonzales"],
  [1,300392,"Walter Soehner GmbH & Co.KG","S34","Diane Gonzales"],
  [1,334866,"Waukesha Metal Products","S41","Todd Foltz"],
  [1,300512,"Wevo-Chemie GmbH","S34","Diane Gonzales"],
  [1,387027,"Wooshung A.D.M. Co. Ltd","S41","Todd Foltz"],
  [1,320381,"Wuerth Electronik IBE GmbH","",""],
  [1,333020,"Wus Printed circuit Co LTD","S36","Paul Merkel"],
  [1,357238,"Wuxi Mi Technologies Co.Ltd","S44","Kyle Gonzales"],
  [1,332850,"Xilinx (Will start using summer 2015)","S32","Shera Diaz"],
  [1,336697,"Yazaki North America","S34","Diane Gonzales"],
  [1,353382,"Yoder Industries","S41","Todd Foltz"]
];

//v6.12
var weightList = [
  ["Same","Part Number","Qty","Vender","Weight",0],
  [0,"2841053700100",162,"Metal Technology",500,0],
  [1,"2841074301100",128,"Nedec",450,0],
  [1,"2841074301100",192,"Twin City",550,0],
  [0,"2841100300100",1920,"Delphi",400,0],
  [0,"2841100500100",1920,"Delphi",400,0],
  [0,"2841100600100",1920,"Delphi",400,0],
  [0,"2841100700100",1920,"Delphi",400,0],
  [0,"2841343204100",616,"Waukesha",300,0],
  [0,"2841343304100","TBD","Waukesha","TBD",0],
  [0,"2841482000100",960,"Alupress",350,0],
  [0,"9242500089000",1440,"Sumida",340,0],
  [0,"A1531559A0100",162,"Minneapolis",600,0],
  [0,"A1531657A0100",624,"Minneapolis",700,0],
  [0,"A1531658A0100",1008,"Minneapolis",950,0],
  [0,"A5400700L0200",900,"Minneapolis",600,0],
  [0,"A1540078L0200",720,"Minneapolis","TBH",0],
  [0,"A1541589X0100",351,"Minneapolis",450,0],
  [0,"A1541709X0100",300,"Minneapolis",800,0],
  [0,"A1542139X0100",720,"Foxlink",300,0],
  [0,"A1542763Z0200",400,"Pace Industry",800,0],
  [0,"A1542764Z0100",360,"Perfection Springs",500,0],
  [0,"A1542764Z0300",360,"Perfection Springs",600,0],
  [0,"A1543208X0200",672,"Jackson Die",600,0],
  [0,"A1543830X0100",144,"Modern metal",250,0],
  [0,"A1544293L0200",360,"Jackson Die",250,0],
  [0,"A2C1039860000",264,"Nedec",350,0],
  [0,"A2C1931750000",4032,"Nedec",500,0],
  [0,"A2C3021430000",4800,"AVX Corporation",250,0],
  [0,"A2C3021470000",4032,"Nedec",550,0],
  [1,"A2C5335855100",520,"Nedec",450,0],
  [1,"A2C5335855100",TBD,"Jackson Die",TBD,0],
  [0,"A2C5335855200",1200,"PerfectionSprings",600,0],
  [0,"A2C5338681100",396,"Nedec",400,0],
  [0,"A2C5339442500",18144,"Molex",1100,0],
  [0,"A2C5340826600",1280,"Molex",420,0],
  [0,"A2C5341178800",640,"Metal Technology",1050,0],
  [0,"A2C5342182600",3276,"Molex",620,0],
  [0,"A2C5342183100",3276,"Molex",620,0],
  [0,"A2C5342183400",3276,"Molex ",620,0],
  [0,"A2C5342890300",1440,"EPT",350,0],
  [0,"A2C5342893000",1728,"EPT",300,0],
  [0,"A2C5343668700",4800,"AVX Corporation",250,0],
  [0,"A2C5343756300",11520,"Wuxi",350,0],
  [0,"A2c7300670100",3600,"Tyco",450,0],
  [0,"A2C7300690100",3600,"Tyco",450,0],
  [0,"A2C7313400000",576,"Hatch",300],
  [1,"A2C7331280000",384,"Nedec",400,0],
  [1,"A2C7331280000",720,"Yoder",740,0],
  [0,"A2C73312900000",576,"Hatch ",340],
  [0,"A2C7341490200",1440,"Deiphi",350,0],
  [0,"A2C7344590200",1760,"Waukesha",700,0],
  [0,"A2C7347840100",3600,"Tyco",450,0],
  [0,"A2C7355500200",2520,"Alupress",400,0],
  [0,"A2C7359230000",1296,"Deiphi",400,0],
  [0,"A2C7361210000",420,"Metal Technology",950,0],
  [0,"A2C7363430200",1680,"Delphi",250,0],
  [0,"A2C7377740100",240,"Nedec",300,0],
  [0,"A2C7377750100",990,"Tro Manufactuing",300,0],
  [1,"A2C7382580200",384,"Nedec",450,0],
  [1,"A2C7382580200",520,"Twin City",550,0],
  [0,"A2C7383060000",192,"Nedec",350,0],
  [0,"A2C7383230000",396,"Nedec",600,0],
  [0,"A2C7383270000",800,"Waukesha",700,0],
  [0,"A2C7413490200",1440,"Delphi",350,0],
  [0,"A2C7413500200",8400,"Waukesha",700,0],
  [0,"A2C7413520300",10500,"Waukesha",500,0],
  [1,"A2C7420100000",1632,"Molex",520,0],
  [1,"A2C7420100000",1280,"Molex",420,0],
  [1,"A2C7430480000",1900,"Jackson Die",1650,0],
  [1,"A2C7430480000",2160,"Nedec",1450,0],
  [0,"A2C7430700000",420,"Jackson Die ",550,0],
  [0,"A2C7431790500",1344,"Swoboda",400,0],
  [0,"A2C7431800100",2736,"Tro Manufacturing",250,0],
  [0,"A2C7433800000",4212,"Molex",475,0],
  [0,"A2C7433810000",4212,"Molex",475,0],
  [0,"A2C7436900000",1440,"Delphi",300,0],
  [0,"A2C7449690000",3600,"Tyco",450,0],
  [0,"A2C7449700000",3600,"Tyco",450,0],
  [0,"A2C7471630200",960,"Trend Tech",250,0],
  [0,"A2C7471640200",960,"Trend Tech",250,0],
  [0,"A2C7473260100",432,"Trend Tech.",250,0],
  [0,"A2C7473300200",504,"Trend Tech.",300,0],
  [0,"A2C7476800100",1800,"Nifco",400,0],
  [0,"A2C7476810100",1800,"Nifco",450,0],
  [1,"A2C7477570000",255,"Nedec",350,0],
  [1,"A2C7477570000",576,"Minn.Die Casting",450,0],
  [0,"A2C7477580000",576,"Tro Manufacturing",275,0],
  [0,"A2C7481290000",180,"Nedec",300,0],
  [0,"A2C7489000000",3276,"Molex",620,0],
  [0,"A2C7489010000",3276,"Molex",620,0],
  [0,"A2C7502110000",408,"TRO Manufacturing",350,0],
  [0,"A2C7501830000",312,"Nedec",450,0],
  [0,"A2C7539870000",180,"Yoder",700,0],
  [0,"A2C7553950000",336,"Trend Tech.",125,0],
  [0,"A2C7553970000",336,"Trend Tech.",125,0],
  [0,"A2C7565140000",528,"Tro Manufacturing",350,0],
  [0,"A2C7600840000",1872,"Nifco",450,0],
  [0,"A2C7600860000",1872,"Nifco",400,0],
  [0,"A2C7603700000",960,"Alupress",300,0],
  [0,"A2C7673990000",660,"Tro Manufacutrin",500,0],
  [0,"A2C7686350000",2376,"Nifco",500,0],
  [0,"A2C8013370000",4800,"AVX Corporation",200,0],
  [___,"___",___,"___",__,0],
  [0,"A2C9326290000",15600,"Poeppelmann",175,0],
  [0,"A2C9480500000",192,"Nedec",400,0],
  [0,"A2C9480510000",768,"Mansfield",650,0],
  [0,"A2C9519150000",1280,"Molex",400,0],
  [1,"A2C9519200000",960,"Molex",380,0],
  [1,"A2C9519200000",1280,"Molex",420,0],
  [0,"A2C9583970000",4032,"Nedec",500,0],
  [0,"A2C9583990000",2304,"Nedec",400,0]
];

//v6.12
var kanban = [
  ["Part Num","Vender","Locations"],
  ["2840359100100","JD Norman","*"],
  ["2840359200100","JD Norman","*"],
  ["2841053700100","Metal Technology ","6"],
  ["2841074301100","Nedec / Twin City ","35 / 25"],
  ["2841100300100","Delphi 1920Per Pallet, Epal","2"],
  ["2841100500100","Delphi 1920Per Pallet, Epal","2"],
  ["2841100600100","Delphi 1920Per Pallet, Epal","2"],
  ["2841100700100","Delphi 1920Per Pallet, Epal","2"],
  ["2841343204100","Waukesha","3"],
  ["2841343304100","Waukesha","3"],
  ["2841482000100","Alupress","8"],
  ["9242500089000","Sumida 1440 Per Pallet","6"],
  ["A1531559A0100","Minneapolis","3"],
  ["A1531657A0100","Minneapolis","3"],
  ["A1531658A0100","Minneapolis","3"],
  ["A1540077L0200","Minneapolis","3"],
  ["A1540078L0200","Minneapolis","3"],
  ["A1541224L0100","Jackson Die","*"],
  ["A1541589X0100","Minneapolis","4"],
  ["A1541716R0100","JD Norman","*"],
  ["A1541709X0100","Minneapolis","3"],
  ["A1541759R0500","JD Norman","*"],
  ["A1542139X0100","Foxlink","3"],
  ["A1542763Z0200","Pace Industry","3"],
  ["A1542764Z0100","Perfection Springs","3"],
  ["A1542764Z0300","Perfection Springs","3"],
  ["A1543208X0200","Jackson Die Casting","3"],
  ["A1543830X0100","Modern Metal","3"],
  ["A1544293L0200","Jackson Die","3"],
  ["A2C0006361300","NGK Europe","*"],
  ["A2C0006361400","NGK Europe","*"],
  ["A2C0003631500","NGK Europe","*"],
  ["A2C0114740000","NGK Europe","*"],
  ["A2C0114750000","NGK Europe","*"],
  ["A2C0141960000","NGK Europe","*"],
  ["A2C0153000000","NGK Europe","*"],
  ["A2C0153010000","NGK Europe","*"],
  ["A2C0270460000","NGK Europe","*"],
  ["A2C1039860000","Nedec ","9"],
  ["A2C1931750000","Nedec","6"],
  ["A2C3021430000","AVX Corp.","4"],
  ["A2C3021470000","Nedec ","4"],
  ["A2C3122210000","AVX Corp.","*"],
  ["A2C3122220000","AVX Corp.","*"],
  ["A2C3167400000","Vola Plast","*"],
  ["A2C5335855100","Nedec, Jaskson Die","15"],
  ["A2C5335855200","Perection Springs","3"],
  ["A2c5338681100","Nedec","6"],
  ["A2c5339442500","Molex","3"],
  ["A2c5340826600","Molex","6"],
  ["A2C5341178800","Metal Tech.","3"],
  ["A2C5342182600","Molex ","3"],
  ["A2C5342183100","Molex","6"],
  ["A2c5342183400","Molex","3"],
  ["A2C5342890300","EPT","4"],
  ["A2C5342893000","EPT GMBH","4"],
  ["A2C5343668700","AVX Corp.","4"],
  ["A2C5343756300","Wuxi","4"],
  ["A2C7300670100","Tyco","3"],
  ["A2C7300690100","Tyco","3"],
  ["A2c7313400000","Hatch","12"],
  ["A2C7331280000","Nedec, Yoder","32"],
  ["A2C7331290000","Hatch","24"],
  ["A2C7341490200","Delphi","4"],
  ["A3C7341500100","Haesealer Metal","*"],
  ["A2C7341530200","Waukesha","*"],
  ["A2C7344590200","Waukesha","8"],
  ["A2C7347840100","Tyco","6"],
  ["A2C7355500200","Alupress","8"],
  ["A2c7359230000","Delphi","8"],
  ["A2C7361210000","Metal Tech","3"],
  ["A2C7363430200","Delphi ","8"],
  ["A2C7377740100","Nedec","21"],
  ["A2C7377750100","Tro manuf. 990 Per Pallet","3"],
  ["A2C7382580200","Nedic, Twin City","18"],
  ["A2C7383060000","Nedec","3"],
  ["A3C7383230000","Nedec","15"],
  ["A2C7383270000","Waukesha ","12"],
  ["A2C7398030200","Nifco","*"],
  ["A2C7413470000","Laird Tech","*"],
  ["A2C7413490200","Delphi","26"],
  ["A2C7413500200","Waukesha ","3"],
  ["A2C7413520300","Wuaukesha","9"],
  ["A2C7420100000","Molex","6"],
  ["A2C7430480000","Nedec / Jackson","3"],
  ["A2C7430700000","Jaskson Die","6"],
  ["A2C7431790500","Swoboda","12"],
  ["A2C7431800100","Tro manuf.","6"],
  ["A2C7433800000","Molex","3"],
  ["A2c7433810000","Molex","3"],
  ["A2C7436900000","Delphi","8"],
  ["A2C7449690000","Tyco","3"],
  ["A2C7449700000","Tyco","8"],
  ["A2C7467430200","Nifco","*"],
  ["A2C7472570200","Trend Tech.","*"],
  ["A2C7472590200","Trend Tech.","*"],
  ["A2C7472610200","Capsonic","*"],
  ["A2C7472680200","Capsonic","*"],
  ["A2C7472840100","Trend Tech.","*"],
  ["A2C7473260100","Trend Tech. ","2"],
  ["A2C7473280200","Trend Tech. ","*"],
  ["A2C7473300200","Trend Tech. ","3"],
  ["A2C7473320200","Capsonic","*"],
  ["A2C7476790100","Nifco","*"],
  ["A2C7476800100","Nifco 1800 per pallet, Standar pallet","9"],
  ["A2C7476810100","Nifco 1800 per pallet, Standar pallet","8"],
  ["A2C7477570000","Nedec / Minn. Die Casting","12"],
  ["A2C7477580000","Tro Manufacturing","6"],
  ["A2C7481290000","Nedec","4"],
  ["A2C7481300000","Tro Manuf.","*"],
  ["A2C7489000000","Molex ","3"],
  ["A2C7489010000","Molex ","3"],
  ["A2C7502110000","Tro Manuf. ","14"],
  ["A2C7536400100","Nifco","*"],
  ["A2C7501830000","Nedec","24"],
  ["A2C7539870000","Yonder / Nedec ","6"],
  ["A2C7553950000","Trend Tech. ","6"],
  ["A2C7553970000","Trend Tech.","6"],
  ["A2C7565140000","Tro Manuf.","6"],
  ["A2C7600840000","Nifco","3"],
  ["A2C7600860000","Nifco","3"],
  ["A2C7603700000","Alupress","4"],
  ["A2C7673990000","Tro Manuf.","6"],
  ["A2C7686350000","Nifco, Standar pallet","6"],
  ["A2C7716160300","Dunaplas","9"],
  ["A2C7716190300","Dunaplas","9"],
  ["A2C8013370000","AVX Corporation","4"],
  ["A2C8425170000","AVX Corp","*"],
  ["A2C8588130000","Molex","*"],
  ["A2C8719180000","AVX Corp.","*"],
  ["A2C8719190000","AVX Corp.","*"],
  ["A2C9326290000","Poeppelamne 15600 Per pallet ","4"],
  ["A2C9480500000","Nedec","10"],
  ["A2C9480510000","Mansfield","8"],
  ["A2C9519150000","Molex","3"],
  ["A3C9519200000","Molex","6"],
  ["A2C9583970000","Nedec","6"],
  ["A2C9583990000","Nedec","3"],
  ["A2C9652980000","Molex","*"]
];



function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
    
    //table.style.backgroundColor = "red";

    
    var cells = tableBody.getElementsByTagName('td');
    
    for (var i=0, len=cells.length; i<len; i++){
        if (parseInt(cells[i].innerHTML,10) ==1){
            //cells[i+1].style.backgroundColor = '#32CD32';
            cells[i+1].style.fontWeight = '900';
        }
    }

}
