import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../entities/UserEntity';
import { UserRepository } from './repositories/UserRepository';

const FIRST_NAMES = [
  'Антон',
  'Артур',
  'Афанасий',
  'Борис',
  'Валентин',
  'Валерий',
  'Виталий',
  'Григорий',
  'Иван',
  'Игорь',
  'Измаил',
  'Илья',
  'Павел',
  'Прохор',
  'Севастьян',
  'Семен',
  'Степан',
  'Ульян',
  'Федор',
  'Фома',
  'Юлий',
];

const LAST_NAMES = [
  'Бажанов',
  'Бессмертных',
  'Болсунов',
  'Викашев',
  'Гуляев',
  'Дубков',
  'Клычев',
  'Ковальчук',
  'Кокорин',
  'Копцев',
  'Корнев',
  'Кривоплясов',
  'Лукьяненко',
  'Малютин',
  'Немцев',
  'Опекунов',
  'Северинов',
  'Торсунов',
  'Трухин',
  'Шмелёв',
  'Ярцин',
];

const MIDDLE_NAMES = [
  'Андреевич',
  'Артемович',
  'Афанасиевич',
  'Вадимович',
  'Венедиктович',
  'Викентиевич',
  'Вячеславович',
  'Герасимович',
  'Денисович',
  'Дмитриевич',
  'Евгениевич',
  'Игоревич',
  'Иосифович',
  'Карлович',
  'Наумович',
  'Прохорович',
  'Ростиславович',
  'Самуилович',
  'Семенович',
  'Тихонович',
  'Яковович',
];

const CITIES = [
  'Аркадак',
  'Белогорск',
  'Бийск',
  'Волгоград',
  'Иваново',
  'Иркутск',
  'Казань',
  'Кемерово',
  'Лобня',
  'Москва',
  'Новосибирск',
  'Нолинск',
  'Омск',
  'Орлов',
  'Пенза',
  'Рыльск',
  'Ряжск',
  'Самара',
  'Ставрополь',
  'Ужур',
  'Череповец',
];

function random(min = 0, max = FIRST_NAMES.length - 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatter(fio) {
  const [lastName, firstName, middleName] = fio.split(' ');

  return `${lastName} ${firstName.charAt(0).toLocaleUpperCase()}. ${middleName.charAt(0).toLocaleUpperCase()}`;
}

const USERS: string[] = Array.from(Array(10000).fill(1).reduce((prev) => prev.add(`${LAST_NAMES[random()]} ${FIRST_NAMES[random()]} ${MIDDLE_NAMES[random()]}`), new Set()));

const MANAGERS = Array(CITIES.length).fill(1).map(() => formatter(USERS.pop()));

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {
  }

  public async createDataSource(): Promise<void> {
    const users = Array(5000).fill(1).map(() => {
      const manager = MANAGERS[random(0, CITIES.length - 1)];

      const user = new UserEntity();

      user.employee_number = random(10000000, 99999999)
      user.name = USERS.pop();
      user.loc_name = CITIES[random(0, CITIES.length - 1)];
      user.group_name = `Группа ${manager}`;
      user.employee_number_manager = 0;
      user.name_manager = manager;
      user.block = random(1, 4);
      user.aht_1 = random(0, 100);
      user.aht_2 = random(0, 100);
      user.aht_3 = random(0, 100);
      user.aht_4 = random(0, 100);
      user.cc_1 = random(0, 100);
      user.cc_2 = random(0, 100);
      user.cc_3 = random(0, 100);
      user.cc_4 = random(0, 100);
      user.nn_1 = random(0, 100);
      user.nn_2 = random(0, 100);
      user.nn_3 = random(0, 100);
      user.nn_4 = random(0, 100);

      return user;
    });

    for (const u of users) {
      try {
        await this.userRepository.save(u);
      } catch (err) {
        //
      }
    }
  }

  public async getDataSource(take = 10, skip = 0): Promise<{ total: number, items: UserEntity[] }> {
    return this.userRepository.findMany(take, skip);
  }
}
