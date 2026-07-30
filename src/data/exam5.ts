import type { Question } from '../types'
import pregunta142 from '../assets/pregunta142.png'
import pregunta143 from '../assets/pregunta143.png'
import pregunta144 from '../assets/pregunta144.png'
import pregunta146 from '../assets/pregunta146.png'
import pregunta148 from '../assets/pregunta148.png'
import pregunta149 from '../assets/pregunta149.png'
import pregunta156 from '../assets/pregunta156.png'
import pregunta157 from '../assets/pregunta157.png'
import pregunta166 from '../assets/pregunta166.png'
import pregunta169 from '../assets/pregunta169.png'
import pregunta170 from '../assets/pregunta170.png'

export const exam5Questions: Question[] = [
  {
    id: 141,
    text: 'Usted va por una calle de doble sentido de tránsito. Para virar a la izquierda, ¿dónde debería ubicarse?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Lo más a la derecha posible.' },
      {
        key: 'b',
        text: 'Justo a la izquierda de la línea de centro de calzada.',
      },
      {
        key: 'c',
        text: 'Justo a la derecha de la línea de centro de calzada.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 142,
    text: 'Usted va detrás de un camión articulado que va a doblar a la derecha hacia una vía angosta. ¿Qué debe hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta142,
    options: [
      {
        key: 'a',
        text: 'Desplazarse rápidamente hacia la pista adyacente y sobrepasarlo.',
      },
      { key: 'b', text: 'Tocar la bocina para advertir su presencia.' },
      {
        key: 'c',
        text: 'Sobrepasarlo por la derecha mientras él se desplace hacia la izquierda.',
      },
      {
        key: 'd',
        text: 'Mantenerse detrás de él hasta que finalice su maniobra.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 143,
    text: '¿Cómo señaliza usted con el brazo cuando va a virar hacia la derecha?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta143,
    options: [
      { key: 'a', text: 'Brazo extendido horizontalmente hacia la izquierda.' },
      {
        key: 'b',
        text: 'Brazo extendido hacia la izquierda y doblado hacia arriba.',
      },
      {
        key: 'c',
        text: 'Brazo extendido hacia la izquierda y doblado hacia abajo.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 144,
    text: '¿Cuál señalización con el brazo del conductor de un vehículo que va adelante le indica que va a virar a la izquierda?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta144,
    options: [
      {
        key: 'a',
        text: 'Brazo extendido hacia la izquierda y doblado hacia arriba.',
      },
      {
        key: 'b',
        text: 'Brazo extendido hacia la izquierda y doblado hacia abajo.',
      },
      { key: 'c', text: 'Brazo extendido horizontalmente hacia la izquierda.' },
    ],
    correct: ['c'],
  },
  {
    id: 145,
    text: 'Usted ha alcanzado a un auto al que desea adelantar. ¿Cuáles son las 3 cosas más difíciles de juzgar?',
    instruction: 'Marque tres respuestas',
    type: 'multiple',
    selectCount: 3,
    options: [
      { key: 'a', text: 'La velocidad del auto al que desea adelantar.' },
      {
        key: 'b',
        text: 'Si es suficientemente ancho el espacio a la izquierda del vehículo que va adelante.',
      },
      {
        key: 'c',
        text: 'La distancia al vehículo que viene en sentido contrario.',
      },
      { key: 'd', text: 'La longitud de la distancia de adelantamiento.' },
      {
        key: 'e',
        text: 'El punto de encuentro con el vehículo que viene en contra.',
      },
    ],
    correct: ['c', 'd', 'e'],
  },
  {
    id: 146,
    text: 'Usted va conduciendo su vehículo a 90 km/h que es la velocidad máxima permitida en esa vía. ¿Qué hace usted si a pesar de todo un vehículo desea adelantarlo?',
    instruction: 'Marque dos respuestas',
    type: 'multiple',
    selectCount: 2,
    image: pregunta146,
    options: [
      { key: 'a', text: 'Conduce lo más a la derecha posible.' },
      { key: 'b', text: 'Se desplaza hacia la berma y circula por ella.' },
      { key: 'c', text: 'Enciende sus luces de advertencia de peligro.' },
      { key: 'd', text: 'No acelera.' },
    ],
    correct: ['a', 'd'],
  },
  {
    id: 147,
    text: 'Usted va por una carretera a 100 km/h. ¿Qué hace usted si a pesar de todo un vehículo que viene atrás desea adelantarlo?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Acelera para impedir el adelantamiento.' },
      { key: 'b', text: 'Se mantiene lo más a la derecha posible.' },
      { key: 'c', text: 'Mantiene o disminuye su velocidad.' },
      {
        key: 'd',
        text: 'Enciende su intermitente izquierdo en señal de advertencia de que viene un vehículo en contra.',
      },
    ],
    correct: ['b', 'c'],
  },
  {
    id: 148,
    text: 'Usted desea adelantar. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    image: pregunta148,
    options: [
      {
        key: 'a',
        text: 'El camión tiene la obligación de correrse hacia la berma para dejarle a usted más espacio.',
      },
      {
        key: 'b',
        text: 'El auto que viene en sentido contrario tiene la obligación de correrse a la berma para aumentar la seguridad.',
      },
      { key: 'c', text: 'El camión está obligado a reducir la velocidad.' },
      {
        key: 'd',
        text: 'Usted tiene la obligación de esperar a que la pista del sentido contrario esté libre de vehículos para luego adelantar.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 149,
    text: 'Usted ha comenzado a adelantar. El auto de la derecha va a aproximadamente 80 km/h. Por su espejo retrovisor usted ve otro auto que tiene intención de adelantar. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta149,
    options: [
      { key: 'a', text: 'Frena ligeramente y vuelve a la pista derecha.' },
      {
        key: 'b',
        text: 'Acelera y adelanta, porque el auto que usted adelanta tiene la obligación de reducir la velocidad.',
      },
      {
        key: 'c',
        text: 'Acelera y adelanta tan rápido como pueda, para no obstaculizar al que viene detrás suyo.',
      },
      {
        key: 'd',
        text: 'Acelera y adelanta, ya que el ancho de la calzada es suficiente para 3 vehículos si el que viene en contra se corre bien a su derecha.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 150,
    text: 'Antes de adelantar a un vehículo de gran tamaño usted debería mantenerse suficientemente atrás de él. ¿Por qué?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Para tener una mejor visual hacia adelante sobre la vía.' },
      {
        key: 'b',
        text: 'Para tener espacio suficiente que le permita acelerar y adelantar en las curvas.',
      },
      {
        key: 'c',
        text: 'Para tener espacio suficiente en caso que el vehículo se detenga y retroceda.',
      },
      {
        key: 'd',
        text: 'Para poder ver mejor las señales que le pueda hacer su conductor.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 151,
    text: '¿Por qué adelantar a un camión es más arriesgado que adelantar a un auto?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Porque los camiones pueden detenerse sorpresivamente.' },
      { key: 'b', text: 'Porque los camiones son más largos que los autos.' },
      { key: 'c', text: 'Porque los frenos de los camiones no son tan buenos.' },
      {
        key: 'd',
        text: 'Porque los camiones suben las pendientes más lentamente.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 152,
    text: 'Usted está a punto de adelantar a un vehículo pesado. ¿Qué debería hacer?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Tocar la bocina para advertirle al conductor que usted está ahí.',
      },
      {
        key: 'b',
        text: 'Mantenerse bien atrás del vehículo para tener una mayor visual.',
      },
      {
        key: 'c',
        text: 'Conducir cerca del vehículo con el propósito de adelantarlo rápidamente.',
      },
      {
        key: 'd',
        text: 'Encender y apagar sus luces y esperar hasta que el conductor le avise que es seguro adelantar.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 153,
    text: 'Usted va conduciendo de día por una zona rural. La calzada tiene pavimento en buen estado y tránsito bidireccional. A menos que alguna señal le indique otra cosa, usted no debe exceder los ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: '50 km/hr' },
      { key: 'b', text: '90 km/hr' },
      { key: 'c', text: '100 km/hr' },
      { key: 'd', text: '120 km/hr' },
    ],
    correct: ['c'],
  },
  {
    id: 154,
    text: 'Usted va conduciendo en la ciudad por una calle con 2 pistas en sentido único de tránsito. A menos que alguna señal le indique otra cosa, usted no debe exceder los ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: '30 km/hr' },
      { key: 'b', text: '60 km/hr' },
      { key: 'c', text: '50 km/hr' },
      { key: 'd', text: '80 km/hr' },
    ],
    correct: ['c'],
  },
  {
    id: 155,
    text: 'Como norma general, antes de tomar una curva cerrada, usted debe ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'acelerar para salir cuanto antes de ella.' },
      {
        key: 'b',
        text: 'acelerar para luego reducir la velocidad mientras vaya saliendo de ella.',
      },
      {
        key: 'c',
        text: 'disminuir la velocidad, pero sólo si la calzada está mojada.',
      },
      {
        key: 'd',
        text: 'disminuir la velocidad, para luego acelerar gradualmente mientras la va recorriendo.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 156,
    text: '¿En cuál o cuáles situaciones el vehículo está mal estacionado?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    image: pregunta156,
    options: [
      { key: 'a', text: 'Situación A' },
      { key: 'b', text: 'Situación B' },
      { key: 'c', text: 'Situación C' },
      { key: 'd', text: 'Situación D' },
    ],
    correct: ['a', 'b'],
  },
  {
    id: 157,
    text: '¿En cuál o cuáles de las siguientes situaciones el conductor se ha detenido correctamente para recoger un pasajero?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    image: pregunta157,
    options: [
      { key: 'a', text: 'Situación A' },
      { key: 'b', text: 'Situación B' },
      { key: 'c', text: 'Situación C' },
      { key: 'd', text: 'Situación D' },
    ],
    correct: ['b', 'd'],
  },
  {
    id: 158,
    text: 'Por una emergencia usted requiere estacionar de noche en una carretera sin alumbrado y con buenas bermas. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Usted debe estacionar al costado izquierdo enfrentando la circulación.',
      },
      {
        key: 'b',
        text: 'Mientras el vehículo esté estacionado usted debe mantener encendidas sus luces de estacionamiento.',
      },
      {
        key: 'c',
        text: 'Usted debe estacionar al costado derecho y de modo que todo el vehículo quede sobre la berma.',
      },
      { key: 'd', text: 'No está permitido estacionar en la berma.' },
    ],
    correct: ['b', 'c'],
  },
  {
    id: 159,
    text: '¿En cuál o cuáles de estos lugares podría el estacionamiento de su vehículo causar daño u obstrucción a otros usuarios de la vía?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Frente a una entrada de autos de una propiedad.' },
      {
        key: 'b',
        text: 'En o al llegar a una parada de locomoción colectiva.',
      },
      { key: 'c', text: 'En un paso de peatones.' },
      { key: 'd', text: 'En un espacio delimitado para estacionar.' },
    ],
    correct: ['a', 'b', 'c'],
  },
  {
    id: 160,
    text: '¿En qué circunstancia usted se detendría justo sobre un cruce cebra existente a mitad de cuadra?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'En ningún momento.' },
      { key: 'b', text: 'Cuando no hay peatones esperando para cruzar.' },
      { key: 'c', text: 'Durante la noche.' },
      {
        key: 'd',
        text: 'Cuando ello sea necesario para evitar un accidente.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 161,
    text: 'Como regla general, ¿en cuál o cuáles de los siguientes lugares usted no debe estacionar?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'En una parada de buses.' },
      { key: 'b', text: 'Al costado derecho de una vía urbana.' },
      { key: 'c', text: 'Al lado de un bandejón central.' },
      {
        key: 'd',
        text: 'Frente a una entrada de autos de una casa particular.',
      },
      { key: 'e', text: 'En una vía inclinada levemente.' },
      { key: 'f', text: 'En una curva del camino.' },
    ],
    correct: ['a', 'c', 'd', 'f'],
  },
  {
    id: 162,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) tratándose de una vía urbana sin señales de tránsito que prohíban o autoricen el estacionamiento o la detención?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Usted puede detenerse en doble fila sólo por el tiempo necesario para que bajen pasajeros de su auto.',
      },
      {
        key: 'b',
        text: 'Usted puede detenerse al costado de un bandejón central para permitir la subida de pasajeros a su vehículo.',
      },
      {
        key: 'c',
        text: 'Al estacionar, usted debe hacerlo al costado derecho y preocupándose de dejar una distancia de a lo menos 10 m entre su vehículo y la esquina.',
      },
      {
        key: 'd',
        text: 'Usted puede estacionar al costado derecho y a 5 m de la esquina si el cruce se encuentra semaforizado.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 163,
    text: 'Usted va a dejar su vehículo estacionado. ¿En qué caso puede dejarlo con el motor funcionando?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'En ningún caso.' },
      { key: 'b', text: 'Si va a estar estacionado menos de 5 minutos.' },
      { key: 'c', text: 'Si la batería está descargada.' },
      { key: 'd', text: 'Si en el vehículo va a permanecer una persona.' },
    ],
    correct: ['a'],
  },
  {
    id: 164,
    text: 'En una vía urbana de sentido único de tránsito, sin señalización que permita o prohíba el estacionamiento, ¿a qué lado puede estacionar?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'A ambos lados.' },
      {
        key: 'b',
        text: 'En ninguno, porque no hay señales que lo permitan.',
      },
      {
        key: 'c',
        text: 'Sólo al lado derecho según el sentido del tránsito.',
      },
      {
        key: 'd',
        text: 'Sólo al lado izquierdo según el sentido del tránsito.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 165,
    text: '¿En cuáles 3 de las siguientes ocasiones debe usted detener siempre su vehículo?',
    instruction: 'Marque tres respuestas',
    type: 'multiple',
    selectCount: 3,
    options: [
      { key: 'a', text: 'Al verse involucrado en un accidente.' },
      { key: 'b', text: 'Al enfrentar una señal CEDA EL PASO.' },
      { key: 'c', text: 'Al enfrentar una luz roja de un semáforo.' },
      {
        key: 'd',
        text: 'Ante un cruce cebra en el que no hay peatones cruzando ni esperando para cruzar.',
      },
      { key: 'e', text: 'Cuando un Carabinero se lo solicita.' },
    ],
    correct: ['a', 'c', 'e'],
  },
  {
    id: 166,
    text: '¿A cuántos metros de una esquina es lo más cerca que usted puede estacionar?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta166,
    options: [
      { key: 'a', text: '5 metros' },
      { key: 'b', text: '10 metros' },
      { key: 'c', text: '12 metros' },
      { key: 'd', text: '15 metros' },
    ],
    correct: ['b'],
  },
  {
    id: 167,
    text: 'Como regla general, ¿en cuál o cuáles de los siguientes lugares nunca debe estacionar?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'En un paso de peatones.' },
      { key: 'b', text: 'En un puente.' },
      { key: 'c', text: 'A menos de 10 metros de una esquina.' },
      { key: 'd', text: 'Al costado derecho de una vía urbana.' },
      {
        key: 'e',
        text: 'En o al llegar a una parada de locomoción colectiva.',
      },
    ],
    correct: ['a', 'b', 'c', 'e'],
  },
  {
    id: 168,
    text: 'De noche, en una zona rural, por emergencia usted estaciona su vehículo al costado de la vía. ¿En qué circunstancia debe usted encender sus luces de estacionamiento?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Cuando la berma no es suficientemente ancha y parte del vehículo queda sobre la calzada.',
      },
      {
        key: 'b',
        text: 'Cuando el centro de la calzada está demarcado con línea blanca continua.',
      },
      { key: 'c', text: 'Cuando el camino es de tierra.' },
      { key: 'd', text: 'Siempre.' },
    ],
    correct: ['d'],
  },
  {
    id: 169,
    text: '¿Qué hace usted ante esta situación?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta169,
    options: [
      { key: 'a', text: 'Continúa a la misma velocidad.' },
      { key: 'b', text: 'Toca la bocina.' },
      { key: 'c', text: 'Pasa el paso de peatones lo más rápido posible.' },
      { key: 'd', text: 'Se detiene.' },
    ],
    correct: ['d'],
  },
  {
    id: 170,
    text: 'Usted conduce a 90 km/h cuando la vía es obstruida sorpresivamente por un camión que está virando a la izquierda. ¿Qué es lo primero que hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta170,
    options: [
      { key: 'a', text: 'Hace señales de luces y toca la bocina.' },
      { key: 'b', text: 'Frena firmemente.' },
      { key: 'c', text: 'Se desplaza a la pista de la izquierda.' },
      { key: 'd', text: 'Disminuye levemente la velocidad.' },
    ],
    correct: ['b'],
  },
  {
    id: 171,
    text: '¿Adquiere usted un derecho sobre otros usuarios de la vía cuando utiliza sus luces indicadoras de viraje?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Sí, el usar las luces indicadoras de viraje le da a usted preferencia sobre los conductores que van en igual dirección a la suya.',
      },
      {
        key: 'b',
        text: 'Sí, y además de darle a usted preferencia le exime de cualquier responsabilidad.',
      },
      {
        key: 'c',
        text: 'No, porque usted sólo está advirtiendo su intención de realizar una maniobra que hará cuando sea seguro hacerla.',
      },
      {
        key: 'd',
        text: 'Sí, pero sólo en el caso que usted esté tratando de abandonar un estacionamiento al borde de la calzada.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 172,
    text: 'Usted se aproxima a un cruce cebra. En la vereda hay peatones esperando cruzar. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Disminuye la velocidad y se prepara para detenerse.',
      },
      {
        key: 'b',
        text: 'Da la pasada a los peatones sólo si éstos son ancianos o niños.',
      },
      { key: 'c', text: 'Usa sus luces para indicarles que pueden pasar.' },
      { key: 'd', text: 'Toca la bocina para indicarles que pueden cruzar.' },
    ],
    correct: ['a'],
  },
  {
    id: 173,
    text: 'Usted conduce un vehículo de marcha lenta por un camino angosto y sinuoso. En estas circunstancias, usted debería...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'circular cerca del centro de la calzada para evitar que otros lo adelanten peligrosamente.',
      },
      {
        key: 'b',
        text: 'correrse hacia la derecha cuando pueda hacerlo en forma segura, para permitir que otros lo adelanten.',
      },
      {
        key: 'c',
        text: 'hacer indicaciones con la mano a los otros conductores cuando usted crea que podrán adelantarlo rápidamente.',
      },
      {
        key: 'd',
        text: 'señalizar con su intermitente derecho cuando adelantar no sea peligroso para los otros.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 174,
    text: 'Usted está circulando por una vía rápida en buenas condiciones. ¿Cómo puede estar seguro de que lo hace a una distancia adecuada del vehículo que va adelante?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'La distancia entre usted y el vehículo que va adelante debería ser dos veces el largo de su vehículo.',
      },
      {
        key: 'b',
        text: 'La distancia entre usted y el vehículo que va adelante debería ser igual a su distancia de frenado.',
      },
      {
        key: 'c',
        text: 'La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en tres segundos.',
      },
      {
        key: 'd',
        text: 'La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en un segundo.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 175,
    text: 'El conductor detrás suyo le sigue muy de cerca. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Señaliza a la derecha y le indica con la mano para que lo adelante.',
      },
      {
        key: 'b',
        text: 'Disminuye la velocidad y le permite que lo adelante.',
      },
      {
        key: 'c',
        text: 'No hace nada y se mantiene dentro del límite de velocidad.',
      },
      { key: 'd', text: 'Se acerca hacia el centro de la calzada.' },
    ],
    correct: ['c'],
  },
]
