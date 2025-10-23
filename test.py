board = list(range(1, 10))

counter = 0
win = False
while not win:
    # отрисовываем поле
    print("-" * 13)
    for i in range(3):
        print("|", board[0 + i * 3], "|", board[1 + i * 3], "|", board[2 + i * 3], "|")
        print("-" * 13)
    
    # чередуем так, чтобы 
    if counter % 2 == 0:
        elem = "X"
    else:
        elem = "O"
    
    # начинаем заполнять
    valid = False
    while not valid:
        player_answer = input("Куда поставим " + elem + "? ")
        try:
            player_answer = int(player_answer)
        except:
            print("Некорректный ввод. Вы уверены, что ввели число?")
            continue
        if 1 <= player_answer <= 9:
            if str(board[player_answer - 1]) not in "XO":
                board[player_answer - 1] = elem
                valid = True
            else:
                print("Эта клеточка уже занята")
        else:
            print("Некорректный ввод. Введите число от 1 до 9 чтобы походить.")
    
    # после того, как поставили, добавляем в счетчик общее количество знаков
    counter += 1
    
    if counter > 4:
        # проверка выйгрыша
        win_coord = ((0, 1, 2), (3, 4, 5), (6, 7, 8), (0, 3, 6), (1, 4, 7), (2, 5, 8), (0, 4, 8), (2, 4, 6))
        for each in win_coord:
            if board[each[0]] == board[each[1]] == board[each[2]]:
                tmp = board[each[0]]
        tmp = False
        
        # если выйграл
        if tmp:
            print(tmp, "выиграл!")
            break
    
    # если все поля заполнены
    if counter == 9:
        print("Ничья!")
        break