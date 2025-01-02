var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: \n 個人網站: \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '題目一 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '第一題 \n def print_circle():\n    radius = 4\n    center_x = 5\n    center_y = 5\n    for y in range(10):\n        for x in range(10):\n            # 計算每個點與圓心的距離\n            distance = (x - center_x)**2 + (y - center_y)**2\n            # 若距離在圓的半徑範圍內，印出 "*"，否則印出空白\n            if distance <= radius**2:\n                print("*", end="")\n            else:\n                print(" ", end="")\n        print()  # 換行\n\n# 執行程式\nprint_circle()\n \n \n 第二題 \n from browser import html\nfrom browser import document as doc\nimport math\n \n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width = 400, height = 400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n \n# 每一格的 pixel 數\ngs = 20\n \n# gs*tc = canvas width and height\n \nctx = canvas.getContext("2d")\n \ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n     \ndef grid(width, height, grid_pix):\n    # x 方向共 width 格\n    # y 方向共 height 格\n    # grid_pix, 每一個的 pixel 點數\n    # 利用迴圈與座標增量繪圖\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n \ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x - 1, y - 1, gs, gs)\n \n# 繪製圓形的邏輯\ndef draw_circle(center_x, center_y, radius):\n    for i in range(10):  # 設定 10x10 網格\n        for j in range(10):\n            # 計算每個格子中心的 (x, y) 座標\n            x_center = (i * gs) + gs / 2\n            y_center = (j * gs) + gs / 2\n            # 計算每個格子與圓心的距離\n            distance = math.sqrt((x_center - center_x) ** 2 + (y_center - center_y) ** 2)\n            # 如果距離小於等於半徑，填充這個格子\n            if distance <= radius:\n                fill(i * gs, j * gs, "black")\n \n# 繪製 10x10 網格\ngrid(10, 10, gs)\n \n# 圓心設在 (5, 5)，半徑設為 5\ncenter_x = 5 * gs  # 圓心的 x 座標\ncenter_y = 5 * gs  # 圓心的 y 座標\nradius = 5 * gs  # 半徑\n \n# 繪製圓形\ndraw_circle(center_x, center_y, radius)\n  \n \n 第三題 \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '第六題:06_list_slicing \n 範例程式: 城市 \n \n 根據索引選取單個或多個元素。 \n 設定步長來篩選間隔元素。 \n 使用負數索引來倒序選取元素。 \n 反轉整個列表。 \n cities = ["San Diego", "Prague", "Cape Town", "Tokyo", "Melbourne"]\nprint(cities) # 輸出所有城市\nprint(cities[1]) # 輸出索引 1 的城市\nprint(cities[1:4]) # 從索引 1 到 3（不包含索引 4）\nprint(cities[1:4:2]) # 從索引 1 到 3，每隔一個元素取一次\nprint(cities[0:3]) # 從索引 0 到 2（不包含索引 3）\nprint(cities[:3]) # 與上面相同，從開始到索引 2（不包含索引 3）\nprint(cities[2:5]) # 從索引 2 到 4（不包含索引 5）\nprint(cities[2:]) # 從索引 2 開始到列表結尾\nprint(cities[0:5:2]) # 從索引 0 到 4，每隔一個元素取一次\nprint(cities[::2]) # 從開始到結尾，每隔一個元素取一次\nprint(cities[4]) # 輸出索引 4 的城市\nprint(cities[-1]) # 輸出最後一個元素（倒數第 1 個）\nprint(cities[-4:-1]) # 切片：從倒數第 4 個到倒數第 2 個（不包含倒數第 1 個）\nprint(cities[3:0:-1]) # 從索引 3 到 1（不包含索引 0）\nprint(cities[-2:-5:-1]) # 從倒數第 2 個到倒數第 5 個\nprint(cities[::-1]) # 將整個列表反轉 \n \n 第七題:07_list_slicing_use \n 範例程式: 列表操作 \n 列表操作（例如合併和插入元素）允許靈活地修改列表內容。 \n 修改列表中的切片會影響原列表的結構。 \n 使用 \xa0 del \xa0 可以刪除列表中的特定元素或整個列表。 \n \n \n # 定義感官列表\nsenses = ["eyes", "nose", "ears", "tongue", "skin"]\nprint (senses) # 輸出：[\'eyes\', \'nose\', \'ears\', \'tongue\', \'skin\']\n \n# 修改(索引 1)的元素替換為 "smell"\nsenses[1] = "smell"\nprint (senses) # 輸出：[\'eyes\', \'smell\', \'ears\', \'tongue\', \'skin\']\n \n# 修改索引第三和 第四的元素替換為 ["taste", "touch"]，\nsenses[3:5] = ["taste", "touch"]\nprint (senses) # 輸出：[\'eyes\', \'smell\', \'ears\', \'taste\', \'touch\']\n \n# 修改索引第零到第二的元素替換為 ["sight", "hearing"]\nsenses[0:3:2] = ["sight", "hearing"]\nprint (senses) # 輸出：[\'sight\', \'smell\', \'hearing\', \'taste\', \'touch\']\n \n# 定義行星列表\nplanets = ["Mercury", "Mars", "Earth", "Neptune"]\nprint (planets) # 輸出：[\'Mercury\', \'Mars\', \'Earth\', \'Neptune\']\n \n# 向 planets "Jupiter"加入列表中，\nplanets = planets + ["Jupiter"]\nprint (planets) # 輸出：[\'Mercury\', \'Mars\', \'Earth\', \'Neptune\', \'Jupiter\']\n \n# 將 "Venus" 插入到 planets 列表的索引 2 位置\nplanets = planets[0:2] + ["Venus"] + planets[2:5]\nprint (planets) # 輸出：[\'Mercury\', \'Mars\', \'Venus\', \'Earth\', \'Neptune\', \'Jupiter\']\n \n# 在索引 5 位置插入 "Uranus" 和 "Saturn"\nplanets = planets[:5] + ["Uranus", "Saturn"] + planets[5:]\nprint(planets) # 輸出：[\'Mercury\', \'Mars\', \'Venus\', \'Earth\', \'Neptune\', \'Uranus\', \'Saturn\', \'Jupiter\']\n \n# 定義房間列表\nhouse = ["kitchen", "dining room", "living room", "bedroom", "bathoom", "garden", "balcony", "terrace"]\nprint (house) # 輸出：[\'kitchen\', \'dining room\', \'living room\', \'bedroom\', \'bathoom\', \'garden\', \'balcony\', \'terrace\']\n \n# 刪除索引 1 的元素（\'dining room\'）\ndel house[1]\nprint (house) # 輸出：[\'kitchen\', \'living room\', \'bedroom\', \'bathoom\', \'garden\', \'balcony\', \'terrace\']\n \n# 刪除索引 4 到 5 的元素（\'garden\' 和 \'balcony\'）\ndel house[4:6]\nprint (house) # 輸出：[\'kitchen\', \'living room\', \'bedroom\', \'bathoom\', \'terrace\']\n \n# 刪除步長為 2 的元素（\'kitchen\'，\'bedroom\'，\'terrace\'）\ndel house[::2]\nprint (house) # 輸出：[\'living room\', \'bathoom\']\n \n# 刪除整個 house 列表\ndel house\n \n# 嘗試輸出會引發錯誤，因為 house 列表已被刪除\nprint (house) # NameError: name \'house\' is not \n \n 第八題:08_for_range \n 範例程式: 配對朋友和食物 \n 動態處理更大範圍的清單。 \n 增加錯誤處理（如清單長度不一致）。 \n 整合更靈活的字串處理方式（如使用 \xa0 zip \xa0 或 \xa0 f-string ）。 \n # 定義朋友的名字\nfriends = ["Geetha", "Luca", "Daisy", "Juhan"]\n \n# 定義不同食物\ndishes = ["sushi", "burgers", "tacos", "pizza"]\n \nprint ("My friends\' names are:") # 輸出：(My friends\' names are:)\n \nprint (friends) # 列印friends清單：[\'Geetha\', \'Luca\', \'Daisy\', \'Juhan\']\n \n# 使用for迴圈，變數 index 從 0 到 3（包含 0，不包含 4）\nfor index in range (0,4):\nprint ("index: " + str(index))\nprint ("friend: " + friends[index])\n \n# 列印食物清單\nprint ("Their favorite dishes are:") # 輸出：Their favorite dishes are:\n \nprint (dishes) # 列印dishes清單：[\'sushi\', \'burgers\', \'tacos\', \'pizza\']\n \n# 用迴圈逐一打印每種食物及其索引\nfor index in range (0,4):\nprint ("index: " + str(index))\nprint ("dish: " + dishes[index])\n \n# 配對朋友和食物並打印\nfor index in range (0,4):\nprint ("My friend " + friends[index] + "\'s favorite dish is " + dishes[index]) \n \n 第九題:09_for_loop_if_equals \n 範例程式: 動物 \n 動物清單： 程式列出所有動物及其位置。 \n 特定條件判斷： 當觀察到目標動物時，輸出特別的訊息，強調目標。 \n 靈活性： 清單和 \xa0 wanted_to_see \xa0 都可以改變，程式可適應新的資料。 \n # 定義動物清單\nanimals = ["giraffe", "penguin", "dolphin"]\n \nprint (animals) # 輸出：[\'giraffe\', \'penguin\', \'dolphin\']\n \n# 使用for迴圈，變數 i 從 0 遍歷到清單的長度減 1\n# for each position in the list\nfor i in range (0, len(animals)):\nprint ("-- Beginning of loop --")\n# print each element and its position\nprint ("The element in position " + str(i) + " is " + animals[i])\n \n# 定義目標動物\nwanted_to_see = "penguin"\n \n# 使用for迴圈遍歷清單\n# for each position in the list\nfor i in range (0, len(animals)):\n# if the current animal is what you really wanted to see\nif animals[i] == wanted_to_see:\n# print out that that\'s the animal you really wanted to see\nprint ("I saw a " + animals[i] + " and I really wanted to see it!") # 輸出：I saw a <動物> and I really wanted to see it!\n# if the current animal is not what you really wanted to see\nelse:\n# just print out that you saw it\nprint ("I saw a " + animals[i]) # 輸出：I saw a <動物> \n \n 第十題:10_for_search \n 範例程式: 配件的名稱長度 \n 清單遍歷與條件篩選： 通過 \xa0 for \xa0 迴圈遍歷配件清單，並使用條件語句來過濾出長度為特定數字的配件，或者根據位置篩選出符合條件的配件。 \n 動態條件設定： 使用變數設定閾值（如長度或位置），使得程式在不同情況下可靈活運作。 \n # 輸出每個配件的名稱及其位置\naccessories = ["belt", "hat", "gloves", "sunglasses", "ring"] # 列印每個配件的名稱以及它在清單中的位置\nprint (accessories)\n# for each position in the list\nfor i in range (len(accessories)):\n#print each elements and its position\nprint ("The element " + accessories[i] + " is in position " + str(i))\n \n# 輸出長度為 6 的配件\n# for each position in the list\nfor i in range (len(accessories)):\n# if the length of the element equals 6\nif len(accessories[i]) == 6:\n# print the element, its position, and its number of characters\nprint ("The element " + accessories[i] + " is in position " + str(i) + " and it has 6 characters")\n \n# 輸出長度小於 6 的配件\n# for each position in the list\nfor i in range (len(accessories)):\n# if the length of the element is less than 6\nif len(accessories[i]) < 6:\n# print the element, its position, and its number of characters\nprint ("The element " + accessories[i] + " is in position " + str(i) + " and it has less than 6 characters")\n# defining the threshold\n \n# 輸出長度大於設定閾值 6 的配件\nn_of_characters = 6\n# for each position in the list\nfor i in range (len(accessories)):\n# if the length of the element is greater than the threshold\nif len(accessories[i]) > n_of_characters:\n# print the element, its position, and its number of characters\nprint ("The element " + accessories[i] + " is in position " + str(i) + " and it has more than " + str(n_of_characters) + " characters")\n# defining the threshold\n \n# 輸出長度不等於設定閾值的配件\nn_of_characters = 6\n# for each position in the list\nfor i in range (len(accessories)):\n# if the length of the element is not equal to the threshold\nif len(accessories[i]) != n_of_characters:\n# print the element, its position, and its number of characters\nprint ("The element " + accessories[i] + " is in position " + str(i) + " and it has a number of characters different from " + str(n_of_characters))\n# defining the threshold\n \n# 輸出位置小於或等於指定位置 2 的配件\nposition = 2\n# for each position in the list\nfor i in range (len(accessories)):\n# if the position of the element is less then or equal to to the threshold\nif i <= position:\n# print the element, its position, and its position characteristic\nprint ("The element " + accessories[i] + " is in position " + str(i) + ", which is less than or equal to " + str(position))\n# defining the threshold\n \n# 輸出位置大於或等於指定位置 2 的配件\nposition = 2\n# for each position in the list\nfor i in range (len(accessories)):\n# if the position of the element is greater then or equal to to the threshold\nif i >= position:\n# print the element, its position, and its position characteristic\nprint ("The element " + accessories[i] + " is in position " + str(i) + ", which is at least " + str(position))\n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': 'from browser import html\nfrom browser import document as doc\n\n# 建立 canvas 元素\ncanvas = html.CANVAS(width=500, height=500)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 定義圓心和半徑\nx1, y1 = 200, 200  # 第一個圓的圓心\nx2, y2 = 300, 300  # 第二個圓的圓心\nradius = 141.4  # 圓的半徑\n\nctx = canvas.getContext("2d")\n\n# === 繪製第一個圓 ===\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.fillStyle = "black"\nctx.fill()\n\n# === 繪製重疊區域 (黑色交集區塊) ===\nctx.save()  # 保存繪圖狀態\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.clip()  # 限制繪圖範圍為第一個圓\n\nctx.beginPath()\nctx.arc(x2, y2, radius, 0, 2 * 3.14159)\nctx.fillStyle = "black"\nctx.fill()\nctx.restore()  # 恢復繪圖狀態\n\n# === 填充第一個圓其他區域 ===\n# 填充左半部分 (紅色)\nctx.beginPath()\nctx.moveTo(x1, y1)\nctx.arc(x1, y1, radius, 3.14159, 3.14159 * 1.5, False)\nctx.closePath()\nctx.fillStyle = "red"\nctx.fill()\n\n# 填充上半部分 (藍色)\nctx.beginPath()\nctx.moveTo(x1, y1)\nctx.arc(x1, y1, radius, 3.14159 * 1.5, 0, False)\nctx.closePath()\nctx.fillStyle = "blue"\nctx.fill()\n\n# 填充左下部分 (紫色)\nctx.beginPath()\nctx.moveTo(x1, y1)\nctx.arc(x1, y1, radius, 3.14159 * 0.5, 3.14159, False)\nctx.closePath()\nctx.fillStyle = "purple"\nctx.fill()\n\n# === 填充第二個圓區域 ===\n\n# 填充右上部分 (粉色)\nctx.beginPath()\nctx.moveTo(x2, y2)\nctx.arc(x2, y2, radius, 3.14159 * 1.5, 0, False)\nctx.closePath()\nctx.fillStyle = "pink"\nctx.fill()\n\n# 填充右下部分 (灰色)\nctx.beginPath()\nctx.moveTo(x2, y2)\nctx.arc(x2, y2, radius, 0, 3.14159 * 0.5, False)\nctx.closePath()\nctx.fillStyle = "gray"\nctx.fill()\n\n# 填充下半部分 (綠色)\nctx.beginPath()\nctx.moveTo(x2, y2)\nctx.arc(x2, y2, radius, 3.14159 * 0.5, 3.14159, False)\nctx.closePath()\nctx.fillStyle = "green"\nctx.fill()\n\n# === 繪製輔助框架與對角線 ===\n# 繪製兩個圓的邊框\nctx.lineWidth = 2\nctx.strokeStyle = "black"\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.stroke()\n\nctx.beginPath()\nctx.arc(x2, y2, radius, 0, 2 * 3.14159)\nctx.stroke()\n\n# 繪製正方形框架\nctx.lineWidth = 2\nctx.strokeStyle = "red"\n\n# 第一個正方形\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.stroke()\nctx.fillStyle = "green"  # 填充顏色\nctx.fill()\n# 第二個正方形\nctx.beginPath()\nctx.rect(200, 200, 200, 200)\nctx.stroke()\nctx.fillStyle = "blue"  # 填充顏色\nctx.fill()\n# 繪製對角線\nctx.lineWidth = 2\nctx.strokeStyle = "blue"\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke() \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  畫布定位點  \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': 'from browser import html\nfrom browser import document as doc\nimport random\n  \n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    # 創建 canvas 並設置寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n      \n    # 獲取 canvas 的 2D 上下文\n    ctx = canvas.getContext("2d")\n      \n    return canvas, ctx\n  \n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n  \n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n  \n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    # 初始化畫布\n    canvas, ctx = initialize_canvas(400, 400)\n      \n    # 清除畫布\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n      \n    # 顏色區域存儲\n    color_dict = {}\n  \n    # 使用掃描線方法填充區域\n    for py in range(0, canvas.height):\n        # 逐行掃描，判斷每個點是否在圓內\n        current_color = None  # 當前掃描線區域的顏色\n        for px in range(0, canvas.width):\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n              \n            if in_circle1 and in_circle2 and in_circle3:\n                # 三個圓的交集區域\n                if "intersection" not in color_dict:\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 只有圓1和圓2的交集\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle2 and in_circle3:\n                # 只有圓2和圓3的交集\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1 and in_circle3:\n                # 只有圓1和圓3的交集\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle1:\n                # 只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 點不在三個圓內，畫外區域\n                current_color = "white"  # 背景色白色\n  \n            # 填充顏色\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n  \n# 直接設定圓心和半徑\nx1, y1, r1 = 150, 200, 100  # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100  # 圓2：圓心 (250, 200)，半徑 100\nx3, y3, r3 = 200, 100, 100  # 圓3：圓心 (200, 100)，半徑 100\n  \n# 呼叫畫圓函式\ndraw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3)\n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15_hw', 'text': '第一題\xa0 以"從 1 累加到 100" \n # 初始化總和變量\ntotal_sum = 0\n \n# 從 1 累加到 100\nfor i in range(1, 101):\n    total_sum += i\n \n# 顯示結果\nprint("從 1 累加到 100 的總和是:", total_sum) \n \n 第二題\xa0 "addto" \n # 定義函式 addto\ndef addto(start, end):\n    total_sum = 0\n    for i in range(start, end + 1):\n        total_sum += i\n    return total_sum\n \n# 呼叫函式 addto，並輸出結果\nresult = addto(1, 100)\nprint("從 1 累加到 100 的總和是:", result) \n \n 第三題\xa0 add_only_even \n # 定義函式 add_only_even，接受兩個參數 start 和 end\ndef add_only_even(start, end):\n    total_sum = 0\n    # 使用 for 迴圈遍歷從 start 到 end 的所有數字\n    for i in range(start, end + 1):\n        if i % 2 == 0:  # 判斷是否為偶數\n            total_sum += i  # 累加偶數\n    return total_sum\n \n# 讓用戶輸入起始值和結束值\nstart = int(input("請輸入起始整數: "))\nend = int(input("請輸入結束整數: "))\n \n# 呼叫函式並輸出結果\nresult = add_only_even(start, end)\nprint(f"從 {start} 到 {end} 的偶數總和是: {result}") \n \n 第四題 \xa0 add_avoid_8 \n def add_avoid_8(start, end):\n    total = 0\n    for num in range(start, end + 1):\n        if \'8\' not in str(num):  # 檢查數字是否包含 "8"\n            total += num\n    return total\n  \n# 呼叫函式，計算從 1 加到 100 並避免數字包含 "8" 的總和\ntotal = add_avoid_8(1, 100)\n  \n# 印出計算結果\nprint(total)  # 輸出避開 "8" 的總和結果 \n \n 第五題 add_avoid_8 8跟3去掉 \n # 定義函式，計算不包含數字 "3" 和 "8" 的數字總和\ndef add_avoid_3_and_8(start, end):\n    total = 0\n    for num in range(start, end + 1):\n        if \'3\' not in str(num) and \'8\' not in str(num):  # 檢查數字是否包含 "3" 或 "8"\n            total += num\n    return total\n \n# 呼叫函式，計算範圍內的總和\nstart = 1\nend = 100\ntotal = add_avoid_3_and_8(start, end)\n \n# 印出計算結果\nprint(f"從 {start} 到 {end} 的數字總和（排除包含 \'3\' 和 \'8\' 的數字）為：{total}")\n \n \n', 'tags': '', 'url': 'w15_hw.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '程式1 \n \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w16_exam2', 'text': 'from browser import html\nfrom browser import document as doc\n\n# 建立畫布\ncanvas = html.CANVAS(width=600, height=600)  # 畫布大小增加兩倍\nbrython_div = doc["brython_div1"]  # 將畫布放置於網頁中的指定 div\nbrython_div <= canvas\n\n# 取得 canvas 的 2D 繪圖上下文\nctx = canvas.getContext("2d")\n\n# 每一格的像素大小\npixel_scale = 100  # 每格的像素比例增加兩倍 (原為20，放大到40)\n\n# 定義原點 (31, 15) 作為起始點偏移\noffset_x = 31 * 2  # 放大兩倍\noffset_y = 15 * 2  # 放大兩倍\n\n# 定義迷宮線條\nlines = [\n    ((0, 0), (2, 0)),\n    ((3, 0), (5, 0)),\n    ((5, 0), (5, 5)),\n    ((3, 5), (5, 5)),\n    ((4, 5), (4, 3)),\n    ((1, 3), (4, 3)),\n    ((1, 3), (1, 4)),\n    ((3, 3), (3, 2)),\n    # 第二條線\n    ((0, 0), (0, 5)),\n    ((0, 5), (2, 5)),\n    ((2, 5), (2, 4)),\n    ((2, 4), (3, 4)),\n    ((0, 2), (2, 2)),\n    ((2, 2), (2, 1)),\n    ((1, 1), (4, 1)),\n    ((4, 1), (4, 2)),\n]\n\n# 繪製迷宮線條\nctx.strokeStyle = "blue"  # 設定線條顏色\nctx.lineWidth = 2  # 設定線條寬度\n\nfor line in lines:\n    start = line[0]\n    end = line[1]\n    ctx.beginPath()\n    ctx.moveTo(\n        offset_x + start[0] * pixel_scale,\n        offset_y + start[1] * pixel_scale\n    )\n    ctx.lineTo(\n        offset_x + end[0] * pixel_scale,\n        offset_y + end[1] * pixel_scale\n    )\n    ctx.stroke()\n\n\n\n# 標示起始座標\nctx.font = "18px Arial"  # 放大字體大小\nctx.fillStyle = "red"\nctx.fillText("(31, 26)", offset_x + 10, offset_y - 15)  # 在紅點的右上方標出座標 \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'w16_exam3', 'text': '', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};