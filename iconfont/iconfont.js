;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontyoujiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.698636 62.998823C264.159844 62.998823 63.489498 263.667122 63.489498 511.205914s200.670346 448.208115 448.209138 448.208115 448.208115-200.670346 448.208115-448.208115S759.237429 62.998823 511.698636 62.998823zM724.462414 530.540262c-0.678452 1.480724-1.472538 2.616594-1.939165 3.267417-0.217964 0.38988-0.433882 0.801249-0.652869 1.215688-1.257643 2.382257-2.926656 5.544273-5.808286 8.559956l-0.189312 0.192382c-0.179079 0.182149-0.350994 0.345877-0.512676 0.497327-0.575098 0.823761-1.208525 1.585101-1.889023 2.266623L451.314361 799.212374c-9.376555 9.018398-21.684882 13.984503-34.663474 13.984503-13.719466 0-26.497491-5.434779-35.977399-15.299451-19.085684-19.818371-18.500353-51.494815 1.308809-70.606081l225.702462-217.537502L381.148301 295.451012c-19.995403-18.932188-20.87647-50.610678-1.966795-70.617337 9.41544-9.928117 22.650883-15.618723 36.31509-15.618723 12.811794 0 24.995277 4.846378 34.305317 13.646811l264.368086 250.048963C729.758024 487.632009 733.895251 510.792499 724.462414 530.540262z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-7tianwuliyoutuihuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1016.010752 182.499328 823.296 136.534016l-9.75872 194.332672 96.571392-70.764544C957.906944 335.382528 983.04 421.902336 983.04 512c0 259.731456-211.308544 471.04-471.04 471.04S40.96 771.731456 40.96 512 252.268544 40.96 512 40.96c41.95328 0 83.552256 5.513216 123.639808 16.388096 10.924032 2.963456 22.167552-3.487744 25.12896-14.403584s-3.487744-22.165504-14.403584-25.12896C602.781696 5.994496 557.574144 0 512 0 375.240704 0 246.665216 53.256192 149.960704 149.960704S0 375.240704 0 512s53.256192 265.334784 149.960704 362.039296S375.240704 1024 512 1024s265.336832-53.256192 362.039296-149.960704C970.74176 777.334784 1024 648.759296 1024 512c0-98.859008-27.865088-193.76128-80.797696-276.148224L1016.010752 182.499328z"  ></path>' +
    '' +
    '<path d="M508.229632 733.540352 652.529664 368.760832 652.529664 330.799104 374.58944 330.799104 374.58944 399.960064 563.869696 399.960064 419.569664 733.540352Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M526.317568 15.381504c-186.819584 0-338.844672 147.87584-338.844672 329.6256 0 297.629696 312.001536 641.898496 325.281792 656.412672l13.596672 14.889984 13.563904-14.920704C553.223168 986.784768 865.13664 640.417792 865.13664 345.00608 865.134592 163.258368 713.14432 15.381504 526.317568 15.381504L526.317568 15.381504zM526.265344 962.387968c-60.608512-70.477824-302.442496-367.446016-302.442496-617.37984 0-162.246656 135.72608-294.243328 302.49472-294.243328 166.747136 0 302.440448 131.996672 302.440448 294.243328C828.75904 592.955392 586.836992 891.56096 526.265344 962.387968L526.265344 962.387968zM530.239488 222.772224c-71.43424 0-129.5616 56.56576-129.5616 126.087168 0 69.543936 58.12736 126.098432 129.5616 126.098432 71.460864 0 129.584128-56.554496 129.584128-126.098432C659.827712 279.33696 601.700352 222.772224 530.239488 222.772224L530.239488 222.772224zM530.239488 439.575552c-51.355648 0-93.211648-40.686592-93.211648-90.722304 0-49.984512 41.849856-90.681344 93.211648-90.681344 51.410944 0 93.237248 40.696832 93.237248 90.681344C623.476736 398.88896 581.650432 439.575552 530.239488 439.575552L530.239488 439.575552z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-speech3" viewBox="0 0 1106 1024">' +
    '' +
    '<path d="M961.29024 794.46016 764.14976 794.46016 764.14976 794.46016 440.32 794.46016 440.32 794.46016 398.09024 794.46016 398.09024 794.46016 387.39968 794.46016 273.08032 909.18912C265.4208 916.84864 254.85312 921.6 243.22048 921.6L243.22048 921.6 243.22048 921.6C243.01568 921.6 242.85184 921.55904 242.688 921.55904 231.2192 921.3952 220.85632 916.72576 213.31968 909.18912 213.15584 909.02528 213.03296 908.77952 212.86912 908.61568 211.1488 906.8544 209.55136 904.97024 208.15872 902.92224 207.62624 902.10304 207.2576 901.16096 206.76608 900.3008 205.90592 898.82624 204.96384 897.35168 204.26752 895.71328 203.93984 894.93504 203.81696 894.11584 203.53024 893.29664 202.87488 891.4944 202.21952 889.69216 201.80992 887.76704 201.23648 885.02272 200.94976 882.15552 200.94976 879.2064L200.94976 879.2064 200.94976 794.46016 193.90464 794.46016 193.90464 794.46016 144.62976 794.46016C121.32352 794.46016 102.4 775.49568 102.4 752.10752L102.4 144.75264C102.4 121.36448 121.32352 102.4 144.62976 102.4L961.29024 102.4C984.59648 102.4 1003.52 121.36448 1003.52 144.75264L1003.52 752.10752C1003.52 775.49568 984.59648 794.46016 961.29024 794.46016ZM341.77024 370.76992C295.1168 370.76992 257.26976 408.69888 257.26976 455.4752 257.26976 502.29248 295.1168 540.2624 341.77024 540.2624 388.42368 540.2624 426.22976 502.29248 426.22976 455.4752 426.22976 408.69888 388.42368 370.76992 341.77024 370.76992ZM552.96 370.76992C506.30656 370.76992 468.45952 408.69888 468.45952 455.4752 468.45952 502.29248 506.30656 540.2624 552.96 540.2624 599.61344 540.2624 637.46048 502.29248 637.46048 455.4752 637.46048 408.69888 599.61344 370.76992 552.96 370.76992ZM764.14976 370.76992C717.49632 370.76992 679.69024 408.69888 679.69024 455.4752 679.69024 502.29248 717.49632 540.2624 764.14976 540.2624 810.8032 540.2624 848.65024 502.29248 848.65024 455.4752 848.65024 408.69888 810.8032 370.76992 764.14976 370.76992Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liwu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1000.513588 258.341836c-13.106506-8.376785-49.004087-3.25002-68.257593-3.25002-57.416687 0-114.852818 0-172.269505 0 56.013735-91.052762 6.90527-193.536878-73.133647-224.27495-63.59848-24.425296-149.95222 5.959735-170.643472 50.380434-1.084705 0.541329-2.166339 1.083681-3.251044 1.62501C419.741271-63.267952 169.6217 69.403696 265.931187 253.465782c0 0.542352 0 1.084705 0 1.62501-50.102095-0.475837-237.062184-10.333346-255.153214 13.001105 0 70.959122 0 141.940756 0 212.898855 7.931646 17.171078 31.169907 15.83771 56.881498 14.626115 0 165.209716 0 330.470597 0 495.681336 5.033643 5.703909 6.752798 9.728572 14.626115 13.001105 286.003849 0 572.092633 0 858.096483 0 25.318642-12.614296 14.628162-88.505753 14.626115-125.139092 0-127.833457 0-255.708869 0-383.54335 26.270317 0.6191 40.021505-1.12359 53.631478-11.376095C1015.951185 452.67894 1017.152547 268.977058 1000.513588 258.341836zM488.581126 958.794929c-124.585483 0-249.206782 0-373.792265 0 0-154.375973 0-308.801065 0-463.177038 124.585483 0 249.206782 0 373.792265 0C488.581126 649.994887 488.581126 804.418956 488.581126 958.794929zM488.581126 448.488501c-144.084583 0-288.214191 0-432.298773 0 0-48.751331 0-97.515964 0-146.267295 144.084583 0 288.214191 0 432.298773 0C488.581126 350.972537 488.581126 399.73717 488.581126 448.488501zM488.581126 255.090792c-53.626361 0-107.267049 0-160.89341 0-9.506515-18.781762-27.464515-30.226418-34.129308-53.631478-19.989263-70.201875 36.250622-142.850475 107.261932-131.640156C496.528122 84.929298 490.839563 145.425114 488.581126 255.090792zM625.096313 69.820182c68.906369-11.540847 124.83517 55.984059 110.511953 123.514081-5.91778 27.897374-22.708188 43.137473-37.379329 61.757552-53.625338 0-107.266026 0-160.89341 0C535.220353 145.83546 530.811949 85.612866 625.096313 69.820182zM907.877771 958.794929c-123.500778 0-247.040443 0-370.542244 0 0-154.375973 0-308.801065 0-463.177038 123.500778 0 247.040443 0 370.542244 0C907.877771 649.994887 907.877771 804.418956 907.877771 958.794929zM963.134259 448.488501c-141.92029 0-283.878442 0-425.798732 0 0-48.751331 0-97.515964 0-146.267295 141.92029 0 283.878442 0 425.798732 0C963.134259 350.972537 963.134259 399.73717 963.134259 448.488501z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiaohuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M915.85024 273.45408c-60.55424-64.08192-141.184-99.36384-227.07712-99.36384L389.02272 174.09024l0-46.31552c0-27.58144-17.3824-40.0896-33.54624-40.0896-8.08448 0-16.16384 2.75968-24.24832 8.21248L184.97536 195.77344c-12.76416 8.78592-20.01408 21.5552-19.94752 35.08736 0.128 13.53728 7.63392 26.17344 20.59264 34.6368l145.6128 95.31904c7.82336 5.13024 15.8464 7.76192 23.73632 7.76192 16.41984 0 34.06336-12.70272 34.06336-40.4736l0-45.99296 299.75552 0c119.3728 0 216.49408 103.14752 216.49408 229.89824 0 21.03808-2.63168 41.82528-7.88992 61.9008-7.50592 28.544 8.65792 58.24512 36.04992 66.26304 4.5568 1.34656 9.36448 2.05312 14.23872 2.05312 23.41376 0 44.1344-16.3584 50.2272-39.8336 7.69536-29.44512 11.6736-59.91424 11.6736-90.38336C1009.50528 421.95456 976.21504 337.21856 915.85024 273.45408z"  ></path>' +
    '' +
    '<path d="M710.71232 663.33696c-7.88992-5.13024-15.8464-7.76192-23.73632-7.76192-16.41984 0-34.06336 12.70272-34.06336 40.4736l0 45.99296L327.82848 742.0416c-119.3728 0-216.49408-103.14752-216.49408-229.89824 0-44.6464 12.0576-87.87968 34.7648-125.02016 15.07328-24.76032 8.21248-57.98912-15.32928-74.02496-23.4752-16.16384-57.60512-8.46848-72.6784 16.16384-33.3568 54.52288-50.9952 117.77024-50.9952 182.94272 0 90.0608 33.29024 174.86336 93.65504 238.62272 60.48768 64.08192 141.184 99.36384 227.07712 99.36384l325.08928 0 0 46.31552c0 27.58144 17.3824 40.0896 33.54624 40.0896 8.01792 0 16.16384-2.75968 24.18176-8.21248l146.2528-99.87584c12.83072-8.78592 20.07552-21.5552 19.94752-35.15392-0.128-13.53728-7.63392-26.17344-20.59264-34.6368L710.71232 663.33696z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M702.627 104.373h-380.718c-14.957 0-27.194 12.237-27.194 27.194v761.437c0 14.957 12.237 27.194 27.194 27.194h380.718c14.957 0 27.194-12.237 27.194-27.194v-761.436c0.001-14.957-12.236-27.195-27.194-27.195zM430.686 153.027c0-4.487 3.671-8.158 8.158-8.158h146.849c4.487 0 8.158 3.671 8.158 8.158v0c0 4.487-3.671 8.158-8.158 8.158h-146.849c-4.487 0-8.158-3.67-8.158-8.158v0zM512 893.397c-17.632 0-31.926-14.293-31.926-31.926s14.293-31.926 31.926-31.926 31.926 14.293 31.926 31.926c0 17.632-14.293 31.926-31.926 31.926zM689.030 801.441h-353.524v-614.286h353.524v614.286z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M516.266667 371.2 388.266667 371.2C281.6 371.2 170.666667 315.733333 170.666667 204.8c0-42.666667 25.6-89.6 68.266667-115.2 42.666667-25.6 98.133333-25.6 153.6 0 115.2 59.733333 157.866667 234.666667 157.866667 243.2 0 8.533333 0 21.333333-4.266667 25.6C537.6 366.933333 524.8 371.2 516.266667 371.2zM307.2 132.266667c-12.8 0-25.6 4.266667-38.4 12.8-25.6 17.066667-38.4 42.666667-38.4 59.733333 0 68.266667 81.066667 102.4 153.6 102.4l89.6 0c-17.066667-51.2-51.2-132.266667-115.2-162.133333C341.333333 136.533333 324.266667 132.266667 307.2 132.266667z"  ></path>' +
    '' +
    '<path d="M635.733333 371.2l-132.266667 0c-8.533333 0-17.066667-4.266667-25.6-12.8-4.266667-8.533333-8.533333-17.066667-4.266667-25.6 0-8.533333 42.666667-183.466667 157.866667-243.2l0 0c55.466667-25.6 106.666667-25.6 153.6 0C827.733333 115.2 853.333333 162.133333 853.333333 204.8 853.333333 315.733333 742.4 371.2 635.733333 371.2zM550.4 307.2l89.6 0c72.533333 0 153.6-38.4 153.6-102.4 0-17.066667-12.8-46.933333-38.4-59.733333C729.6 128 699.733333 128 665.6 145.066667l0 0C605.866667 174.933333 567.466667 256 550.4 307.2z"  ></path>' +
    '' +
    '<path d="M896 550.4 128 550.4c-17.066667 0-34.133333-12.8-34.133333-34.133333L93.866667 384c0-42.666667 34.133333-72.533333 76.8-72.533333l682.666667 0c42.666667 0 76.8 34.133333 76.8 72.533333l0 136.533333C925.866667 533.333333 913.066667 550.4 896 550.4zM162.133333 486.4l704 0L866.133333 384c0-4.266667-4.266667-8.533333-8.533333-8.533333L170.666667 375.466667C166.4 371.2 162.133333 375.466667 162.133333 384L162.133333 486.4z"  ></path>' +
    '' +
    '<path d="M802.133333 955.733333 221.866667 955.733333c-42.666667 0-76.8-34.133333-76.8-76.8l0-358.4c0-17.066667 12.8-34.133333 34.133333-34.133333l665.6 0c17.066667 0 34.133333 12.8 34.133333 34.133333l0 358.4C878.933333 921.6 844.8 955.733333 802.133333 955.733333zM209.066667 554.666667l0 328.533333c0 4.266667 4.266667 8.533333 8.533333 8.533333l580.266667 0c4.266667 0 8.533333-4.266667 8.533333-8.533333L806.4 554.666667 209.066667 554.666667z"  ></path>' +
    '' +
    '<path d="M512 955.733333c-17.066667 0-34.133333-12.8-34.133333-34.133333L477.866667 341.333333c0-17.066667 12.8-34.133333 34.133333-34.133333s34.133333 12.8 34.133333 34.133333l0 584.533333C546.133333 942.933333 529.066667 955.733333 512 955.733333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M692.434465 641.34181c90.427522-115.224278 83.916225-281.033651-20.603247-385.554146-113.036449-113.036449-297.804616-111.536282-412.692227 3.351328-114.88761 114.886587-116.387777 299.655777-3.351328 412.692227 104.520495 104.520495 270.328845 111.030769 385.554146 20.603247l159.582555 159.582555 51.092655-51.092655L692.434465 641.34181zM632.572076 632.572076c-94.731548 94.731548-247.084445 95.968725-340.28922 2.762927s-91.967598-245.558695 2.762927-340.28922c94.731548-94.731548 247.084445-95.968725 340.28922-2.762927S727.303624 537.840528 632.572076 632.572076z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-15tianmianfeihuanhuo24px" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M631.466667 448c21.333333 0 38.4 4.266667 55.466667 8.533333 17.066667 8.533333 29.866667 17.066667 42.666667 29.866667 12.8 12.8 21.333333 25.6 29.866667 42.666667 8.533333 17.066667 8.533333 34.133333 8.533333 55.466667 0 21.333333-4.266667 38.4-12.8 55.466667-8.533333 17.066667-17.066667 29.866667-29.866667 42.666667-12.8 12.8-29.866667 21.333333-46.933333 29.866667S640 725.333333 622.933333 725.333333c-34.133333 0-59.733333-8.533333-76.8-21.333333s-34.133333-34.133333-46.933333-55.466667l51.2-17.066667c8.533333 17.066667 17.066667 29.866667 29.866667 38.4 12.8 8.533333 29.866667 12.8 46.933333 12.8 12.8 0 25.6-4.266667 34.133333-8.533333 12.8-4.266667 21.333333-12.8 29.866667-21.333333 8.533333-8.533333 12.8-17.066667 21.333333-29.866667 4.266667-12.8 8.533333-25.6 8.533333-38.4 0-17.066667-4.266667-29.866667-8.533333-42.666667-4.266667-12.8-12.8-21.333333-21.333333-29.866667-8.533333-8.533333-21.333333-12.8-34.133333-17.066667s-25.6-4.266667-42.666667-4.266667c-12.8 0-29.866667 4.266667-42.666667 8.533333-17.066667 4.266667-29.866667 12.8-42.666667 17.066667L529.066667 298.666667l226.133333 0 0 46.933333-174.933333 0 0 115.2c8.533333-4.266667 17.066667-8.533333 25.6-8.533333C614.4 448 622.933333 448 631.466667 448zM384 725.333333 341.333333 725.333333 341.333333 341.333333 298.666667 341.333333 256 298.666667l72.533333 0L384 298.666667 384 725.333333zM512 981.333333c-106.666667 0-200.533333-34.133333-281.6-93.866667 12.8-4.266667 25.6-12.8 38.4-25.6C337.066667 908.8 422.4 938.666667 512 938.666667c234.666667 0 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333 85.333333 277.333333 85.333333 512c0 68.266667 17.066667 132.266667 46.933333 192-12.8 8.533333-21.333333 21.333333-29.866667 34.133333C64 669.866667 42.666667 593.066667 42.666667 512 42.666667 251.733333 251.733333 42.666667 512 42.666667s469.333333 209.066667 469.333333 469.333333S772.266667 981.333333 512 981.333333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontaisim" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M666.420377 485.702436l-309.850756 0c-16.065039 0-29.136321 13.065032-29.136321 29.131321l0 309.855756c0 16.065039 13.071282 29.135071 29.136321 29.135071l309.850756 0c16.065039 0 29.136321-13.070032 29.136321-29.135071L695.556698 514.832507C695.556698 498.768718 682.485416 485.702436 666.420377 485.702436z"  ></path>' +
    '' +
    '<path d="M861.283353 233.254319 636.791555 5.176263c-3.271258-3.313758-7.760019-5.177513-12.39378-5.177513L230.504313-0.00125c-40.660099 0-73.74268 31.497577-73.74143 70.205171l0 883.543407c0 38.756345 33.081331 70.252672 73.74268 70.252672l561.980122 0c40.661349 0 73.74768-31.496327 73.74768-70.251422L866.233365 245.415599C866.233365 240.875588 864.460861 236.475577 861.283353 233.254319zM730.226783 824.689513c0 35.167586-28.63382 63.806406-63.806406 63.806406l0-0.0025-309.850756 0c-35.172586 0-63.806406-28.63757-63.806406-63.805156L292.763215 514.833757c0-35.168836 28.63382-63.802656 63.806406-63.802656l309.850756 0c35.172586 0 63.806406 28.63382 63.806406 63.801406L730.226783 824.689513z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1308 1024">' +
    '' +
    '<path d="M1024.682667 841.045333c-24.348444 0-48.014222 9.671111-65.194667 26.737778-17.123556 17.009778-26.908444 40.675556-26.908444 64.739556 0 24.064 9.784889 47.672889 26.908444 64.739555a92.899556 92.899556 0 0 0 130.275556 0c17.123556-17.066667 27.079111-40.675556 27.079111-64.739555a91.989333 91.989333 0 0 0-92.16-91.477334m-508.643556 0c-24.234667 0-48.071111 9.671111-65.194667 26.737778-17.123556 17.009778-26.908444 40.675556-26.908444 64.739556 0 24.064 9.784889 47.672889 26.908444 64.739555a92.899556 92.899556 0 0 0 130.275556 0c17.123556-17.066667 27.022222-40.675556 27.022222-64.739555a91.989333 91.989333 0 0 0-92.103111-91.477334m785.294222-610.417777l-151.495111 478.72c-10.695111 33.564444-41.642667 55.978667-77.141333 55.978666H487.196444c-33.564444 0-66.332444-20.764444-78.051555-52.053333L186.083556 113.379556H56.718222A56.832 56.832 0 0 1 0 56.718222 56.888889 56.888889 0 0 1 56.718222 0h168.504889c23.552 0 44.828444 16.213333 53.191111 38.115556l231.367111 613.831111h539.022223l121.173333-382.634667H501.76a56.832 56.832 0 0 1-56.661333-56.718222 56.888889 56.888889 0 0 1 56.661333-56.718222h745.415111a57.856 57.856 0 0 1 54.044445 74.695111" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-banshou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M152.59648 567.17824c55.36768 55.36256 128.96768 85.8624 207.27296 85.8624h0.01536a295.7824 295.7824 0 0 0 111.52384-21.95968l293.21216 293.21216c21.34016 21.34016 49.71008 33.09056 79.89248 33.09056s58.55744-11.76064 79.89248-33.09056c44.05248-44.0576 44.05248-115.7376 0-159.77984L631.1936 471.30624c44.66176-108.71808 19.92192-235.00288-63.89248-318.81728-55.3728-55.36768-128.99328-85.86752-207.30368-85.86752a292.23936 292.23936 0 0 0-111.93344 22.1184l-31.0784 12.81024L357.90848 242.4832a81.06496 81.06496 0 0 1 23.8848 57.65632c0 21.77536-8.48384 42.25024-23.8848 57.64608a81.00864 81.00864 0 0 1-57.66144 23.8848 81.00864 81.00864 0 0 1-57.6512-23.8848L125.44 240.64l-23.77728-23.77216-12.81536 31.08352c-45.312 109.90592-20.28544 235.20768 63.74912 319.22688z m-33.26976-269.20448l91.55072 91.54048c23.86944 23.86944 55.60832 37.02272 89.3696 37.02272s65.50016-13.15328 89.36448-37.02784c23.86944-23.86944 37.02784-55.6032 37.02784-89.36448 0-33.77152-13.1584-65.50528-37.02784-89.37984L298.09664 119.23968a248.55552 248.55552 0 0 1 61.89568-7.76704c66.32448 0 128.68608 25.8304 175.5904 72.73472 74.20416 74.20416 93.75232 187.70944 48.64 282.4448l-6.8096 14.29504 315.25888 315.28448c26.5728 26.56256 26.5728 69.79072 0 96.34816-12.86144 12.87168-29.97248 19.95776-48.16896 19.95776s-35.3024-7.0912-48.17408-19.95776l-315.27936-315.26912-14.29504 6.79936c-33.0752 15.75936-70.02624 24.07936-106.87488 24.07936-66.3296 0-128.68096-25.82016-175.57504-72.71936C121.3952 472.56064 97.53088 382.35136 119.32672 297.97376z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M876.000256 218.000384h-728.000512c-45.498368 0-83.999744 38.501376-83.999744 83.999744v419.999744c0 46.37696 37.622784 83.999744 83.999744 83.999744h728.000512c46.367744 0 83.999744-37.622784 83.999744-83.999744V302.000128c0-45.498368-38.501376-83.999744-83.999744-83.999744z m-728.000512 56.000512h728.000512c14.8736 0 28.000256 13.126656 28.000256 28.000256v56.000512h-784v-56.000512c0-14.874624 13.125632-28.000256 27.999232-28.000256z m728.000512 475.999232h-728.000512c-14.8736 0-28.000256-13.11744-28.000256-28.000256V470.00064H903.999488v252.000256c0.001024 14.881792-13.125632 27.999232-27.999232 27.999232z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-play" viewBox="0 0 1080 1024">' +
    '' +
    '<path d="M908.458667 445.553778L375.637333 132.551111a113.777778 113.777778 0 0 0-176.128 103.651556v614.798222a113.777778 113.777778 0 0 0 172.430223 114.915555l539.306666-317.212444a113.777778 113.777778 0 0 0-2.844444-203.150222z" fill="#6A6C6D" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yijiuhuanxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M440.890647 412.436026l170.662447 0 0 220.438995-170.662447 0 0-220.438995ZM440.890647 387.547753 440.890647 391.10322l3.555467 0L611.553094 391.10322l0-3.555467c0-9.798869-7.971359-17.777338-17.777338-17.777338l-135.107771 0C448.862006 369.770414 440.890647 377.748884 440.890647 387.547753zM440.890647 654.207826l0 3.555467c0 9.798869 7.971359 17.777338 17.777338 17.777338l135.107771 0c9.80598 0 17.777338-7.978469 17.777338-17.777338L611.553094 654.207826 444.446115 654.207826 440.890647 654.207826zM1007.532638 282.391241c-21.944347-126.27599-142.837358-246.415242-268.651136-266.972956-125.813778-20.557714-331.696688-20.557714-457.510467 0C155.550146 35.976 35.858882 156.115252 15.372277 282.391241c-20.479494 126.27599-20.479494 332.912659 0 459.195759 20.479494 126.27599 140.177868 246.415242 265.991647 266.972956 125.813778 20.557714 331.696688 20.557714 457.510467 0 125.813778-20.557714 246.706789-140.696966 268.651136-266.972956C1029.469874 615.311011 1029.469874 408.66723 1007.532638 282.391241zM222.727151 604.210841c-7.203378-26.203796-11.128614-53.75156-11.128614-82.216634 0-143.128906 97.348704-263.851255 229.29211-299.697479l0-34.025826 95.265201 41.392754L440.890647 271.063521l0-26.630453c-120.032588 35.227573-207.959303 146.286161-207.959303 277.561138 0 24.56117 3.100368 48.404136 8.888669 71.194684L222.727151 604.210841zM593.775756 348.437608c21.567467 0 39.110144 17.542677 39.110144 39.110144L632.8859 391.10322l0 24.17718 0 220.438995L632.8859 654.207826l0 3.555467c0 21.567467-17.542677 39.110144-39.110144 39.110144l-135.107771 0c-21.567467 0-39.110144-17.542677-39.110144-39.110144L419.557841 654.207826l0-18.488432 0-220.438995L419.557841 391.10322l0-3.555467c0-21.567467 17.542677-39.110144 39.110144-39.110144L593.775756 348.437608zM522.225525 832.621194c-88.026268 0-167.562079-36.855978-224.12957-95.898073l-27.36288 15.793387-11.78282-103.201004 83.482381 61.80825-25.272264 14.591639c52.428926 52.784472 124.967577 85.572996 205.065152 85.572996 80.673561 0 153.702867-33.229401 206.224235-86.668079l18.993308 10.965062C690.804468 795.274561 610.813557 832.621194 522.225525 832.621194zM767.339465 687.629223l11.78282-103.201004 22.257227 12.84946c6.499395-24.034961 10.133083-49.229005 10.133083-75.283472 0-133.536254-90.977307-246.180581-214.188482-279.345983l0-22.0439c135.107771 33.677389 235.521288 156.00681 235.521288 301.389882 0 29.965481-4.344782 58.914099-12.301919 86.340976l30.278363 17.478679L767.339465 687.629223z" fill="#ffffff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)