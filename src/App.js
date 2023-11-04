import React from 'react';
import {
  Animator,
  Fade,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
  ZoomOut,
  batch,
} from 'react-scroll-motion';
import arrowDown from './image/arrow-down.png';
import heartIcon from './image/hearicon.png';
import song from './Vspak.mp3';

export default function App() {
  return (
    <>
      <audio autoplay={true} loop controls>
        <source src={song} type="audio/mp3" />
      </audio>
      <div className="bg-black">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-white text-2xl font-medium">Листай вниз</h1>
                <img
                  src={arrowDown}
                  alt="arrow"
                  className="w-[40px] h-[40px]"
                />
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(5, 0), ZoomIn(0, 4))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(10, 0), ZoomIn(0, 10))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(10, 0), ZoomIn(0, 10))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={4}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(6, 6), ZoomIn(0, 6))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(3, 0), ZoomIn(0, 3))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={6}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(1, 0), ZoomIn(0, 1))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={7}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(5, 0), ZoomIn(0, 3))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={8}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(10, 0), ZoomIn(0, 10))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={9}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(10, 0), ZoomIn(0, 10))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={10}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(20, 0), ZoomIn(0, 20))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={11}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(10, 0), ZoomIn(0, 10))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={12}>
            <Animator
              animation={batch(Fade(), Sticky(), ZoomOut(20, 0), ZoomIn(0, 20))}
            >
              <img src={heartIcon} alt="heart" />
            </Animator>
          </ScrollPage>
          <ScrollPage page={13}>
            <Animator animation={batch(Fade(), Sticky())}></Animator>
          </ScrollPage>
          <ScrollPage page={14}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(-100, 100),
                MoveOut(100, -200)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                Я люблю тебя <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={15}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(-100, -100),
                MoveOut(100, 100)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                Я люблю тебя <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={16}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                Я люблю тебя <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={17}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты самая красивая
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={18}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты самая милая
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={19}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты самая лучшая
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={20}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты самая выходи за меня
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={21}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                я так люблююююю тебя
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={22}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты моя
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={23}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты самая ахуенная
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={24}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты моя радость
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={25}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты такая горячая
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={26}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                У тебя самый лучший характер
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={27}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                БОЖЕ КАК ЖЕ ЛЮБЛЮ
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={28}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты только моя.
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={29}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Балдею от тебя
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={30}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                я скучаю...
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={31}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Моя девочка
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={32}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                МОЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={33}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты самый лучший мой выбор
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={34}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Хочу к тебе
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={35}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты самая веселая
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={36}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Ты мое все
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={37}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                люблюююююююююю
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={38}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                ТЫ ТОЛЬКО ТЫ
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={39}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                MoveIn(0, -300),
                MoveOut(0, 0)
              )}
            >
              <span className="text-white text-2xl flex items-center gap-1">
                <img src={heartIcon} alt="heart" />
                Без тебя жизни нет
                <img src={heartIcon} alt="heart" />
              </span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  );
}
