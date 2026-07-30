import type { Question } from '../types'
import pregunta246 from '../assets/pregunta246.png'
import pregunta247 from '../assets/pregunta247.png'
import pregunta248 from '../assets/pregunta248.png'
import pregunta249 from '../assets/pregunta249.png'
import pregunta250 from '../assets/pregunta250.png'
import pregunta251 from '../assets/pregunta251.png'
import pregunta255 from '../assets/pregunta255.png'
import pregunta256 from '../assets/pregunta256.png'
import pregunta257 from '../assets/pregunta257.png'
import pregunta258 from '../assets/pregunta258.png'
import pregunta259 from '../assets/pregunta259.png'
import pregunta262 from '../assets/pregunta262.png'
import pregunta263 from '../assets/pregunta263.png'
import pregunta264 from '../assets/pregunta264.png'
import pregunta265 from '../assets/pregunta265.png'

export const exam8Questions: Question[] = [
  {
    id: 246,
    text: '¿Cuándo puede usted ingresar a un cruce en cuya calzada se han pintado franjas amarillas diagonales?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta246,
    options: [
      { key: 'a', text: 'Siempre que el semáforo esté en verde.' },
      {
        key: 'b',
        text: 'Cuando en la salida del cruce tenga espacio suficiente como para no quedar detenido en él.',
      },
      { key: 'c', text: 'Cada vez que va a virar hacia la derecha.' },
      {
        key: 'd',
        text: 'Sólo cuando haya menos de dos vehículos delante suyo.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 247,
    text: '¿Qué significa esta señal de tránsito?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta247,
    options: [
      { key: 'a', text: 'Gravilla suelta.' },
      { key: 'b', text: 'Peligro de que se pinchen los neumáticos.' },
      { key: 'c', text: 'Pavimento resbaladizo.' },
      { key: 'd', text: 'Curvas en el camino.' },
    ],
    correct: ['c'],
  },
  {
    id: 248,
    text: '¿Qué significa esta señal?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta248,
    options: [
      { key: 'a', text: 'No adelantar.' },
      { key: 'b', text: 'Mantenga su derecha.' },
      {
        key: 'c',
        text: 'Preferencia al tránsito que viene en sentido contrario.',
      },
      { key: 'd', text: 'No cambiar de pista.' },
    ],
    correct: ['a'],
  },
  {
    id: 249,
    text: '¿Cuál de los siguientes tipos de señales le indica que no haga algo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta249,
    options: [
      { key: 'a', text: 'Señal a' },
      { key: 'b', text: 'Señal b' },
      { key: 'c', text: 'Señal c' },
      { key: 'd', text: 'Señal d' },
    ],
    correct: ['c'],
  },
  {
    id: 250,
    text: '¿Qué debe hacer usted cuando enfrenta esta señal?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta250,
    options: [
      {
        key: 'a',
        text: 'Detenerse sólo si viene algún vehículo por la otra vía.',
      },
      {
        key: 'b',
        text: 'Detenerse sólo si hay peatones esperando para cruzar.',
      },
      {
        key: 'c',
        text: 'Detenerse sólo si en la calzada está pintada la leyenda PARE.',
      },
      { key: 'd', text: 'Detenerse siempre.' },
    ],
    correct: ['d'],
  },
  {
    id: 251,
    text: '¿Qué significa esta señal?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta251,
    options: [
      { key: 'a', text: 'Semáforo fuera de servicio.' },
      { key: 'b', text: 'Proximidad de semáforo.' },
      { key: 'c', text: 'Semáforo activado por peatones.' },
      { key: 'd', text: 'Semáforos sincronizados.' },
    ],
    correct: ['b'],
  },
  {
    id: 252,
    text: '¿Qué significa un semáforo en rojo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Que usted puede seguir su camino si no vienen vehículos por la otra vía.',
      },
      {
        key: 'b',
        text: 'Que usted debe disminuir su velocidad y estar preparado para detenerse.',
      },
      {
        key: 'c',
        text: 'Que usted debe detenerse antes de la línea de detención de vehículos.',
      },
      {
        key: 'd',
        text: 'Que usted debe detenerse sobre el paso de peatones.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 253,
    text: '¿Para qué sirven las señales amarillas con forma de rombo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Para entregar información.' },
      { key: 'b', text: 'Para dar órdenes.' },
      { key: 'c', text: 'Para indicar direcciones.' },
      { key: 'd', text: 'Para advertir acerca de peligros.' },
    ],
    correct: ['d'],
  },
  {
    id: 254,
    text: '¿Qué significa un semáforo en amarillo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Que usted debe prepararse para continuar.' },
      {
        key: 'b',
        text: 'Que usted debe detenerse antes de entrar al cruce, a menos que no alcance a hacerlo en forma segura.',
      },
      {
        key: 'c',
        text: 'Que usted debe continuar, siempre que vaya a virar.',
      },
      {
        key: 'd',
        text: 'Que usted debe continuar si no hay peatones cruzando.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 255,
    text: '¿Qué significa esta señal?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta255,
    options: [
      { key: 'a', text: 'Angostamiento de la vía.' },
      {
        key: 'b',
        text: 'Preferencia al tránsito que viene en sentido contrario.',
      },
      { key: 'c', text: 'Proximidad de doble calzada.' },
      { key: 'd', text: 'Dos sentidos de tránsito más adelante.' },
    ],
    correct: ['d'],
  },
  {
    id: 256,
    text: '¿Qué significa esta señal?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta256,
    options: [
      { key: 'a', text: 'Zona de escuela.' },
      { key: 'b', text: 'Cruce de peatones.' },
      { key: 'c', text: 'Niños jugando.' },
      { key: 'd', text: 'Peatón debe transitar por su izquierda.' },
    ],
    correct: ['b'],
  },
  {
    id: 257,
    text: '¿Cuál de estas señales le previene que más adelante hay una serie de curvas?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta257,
    options: [
      { key: 'a', text: 'Señal a' },
      { key: 'b', text: 'Señal b' },
      { key: 'c', text: 'Señal c' },
      { key: 'd', text: 'Señal d' },
    ],
    correct: ['b'],
  },
  {
    id: 258,
    text: '¿Qué significa esta señal?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta258,
    options: [
      {
        key: 'a',
        text: 'Que se cerca a una zona en la que no se permiten bicicletas.',
      },
      {
        key: 'b',
        text: 'Que los ciclistas deben circular por la pista de la derecha.',
      },
      {
        key: 'c',
        text: 'Que los ciclistas deben circular en sentido contrario.',
      },
      {
        key: 'd',
        text: 'Que se acerca a una zona donde es muy probable la presencia de ciclistas en la vía.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 259,
    text: '¿Cuál de estas señales le advierte la proximidad de un cruce de peatones?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta259,
    options: [
      { key: 'a', text: 'Señal a' },
      { key: 'b', text: 'Señal b' },
      { key: 'c', text: 'Señal c' },
      { key: 'd', text: 'Señal d' },
    ],
    correct: ['a'],
  },
  {
    id: 260,
    text: 'De las siguientes señales de tránsito, ¿cuál o cuáles corresponden a señales amarillas con forma de rombo?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Puente angosto' },
      { key: 'b', text: 'Angostamiento de la vía' },
      { key: 'c', text: 'Dirección obligada' },
      { key: 'd', text: 'Mantenga su derecha' },
      { key: 'e', text: 'Bifurcación o cruce en T' },
      { key: 'f', text: 'Cruce ferroviario' },
    ],
    correct: ['a', 'b', 'e', 'f'],
  },
  {
    id: 261,
    text: 'Usted está enfrentando un semáforo en amarillo. ¿Qué luces se encenderán después?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Primero la roja y luego la amarilla nuevamente.',
      },
      { key: 'b', text: 'Primero la roja y luego la verde.' },
      { key: 'c', text: 'Primero la verde y luego la roja.' },
      {
        key: 'd',
        text: 'Primero la verde y luego la amarilla nuevamente.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 262,
    text: '¿Qué significa la demarcación de centro de calzada que muestra la figura?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta262,
    options: [
      {
        key: 'a',
        text: 'Que no puede ser traspasada por un conductor que viene por la pista A.',
      },
      {
        key: 'b',
        text: 'Que no puede ser traspasada por un conductor que va por la pista B.',
      },
      {
        key: 'c',
        text: 'Que en ningún caso pueden efectuarse adelantamientos.',
      },
      {
        key: 'd',
        text: 'Que sólo un conductor que va por la pista B podría efectuar un adelantamiento.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 263,
    text: 'El vehículo indicado con la flecha se encuentra detenido sobre una zona achurada esperando poder efectuar un viraje en U, ¿es esto correcto?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta263,
    options: [
      {
        key: 'a',
        text: 'Sí, la zona achurada sólo separa sentidos de circulación.',
      },
      {
        key: 'b',
        text: 'Sí, siempre que la zona achurada no esté reforzada con tachas o tachones reflectantes.',
      },
      {
        key: 'c',
        text: 'No, porque los vehículos no pueden detenerse ni circular por zonas achuradas.',
      },
      { key: 'd', text: 'No, porque se trata de una vía de mucho tránsito.' },
    ],
    correct: ['c'],
  },
  {
    id: 264,
    text: 'De acuerdo a las circunstancias que se aprecian en la fotografía, ¿sería correcto que el automóvil indicado con la flecha continuara derecho?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta264,
    options: [
      { key: 'a', text: 'Sí' },
      { key: 'b', text: 'No' },
    ],
    correct: ['b'],
  },
  {
    id: 265,
    text: '¿Qué le indica la señal de tránsito que se observa en la fotografía?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta265,
    options: [
      {
        key: 'a',
        text: 'Que usted está obligado a detenerse a la altura de la señal.',
      },
      {
        key: 'b',
        text: 'Advierte que el cruce al que usted se aproxima es peligroso.',
      },
      {
        key: 'c',
        text: 'Que usted está obligado a ceder el paso a los vehículos que se aproximen por la otra vía.',
      },
      {
        key: 'd',
        text: 'Es sólo una recomendación para que usted ponga especial atención al pasar el cruce.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 266,
    text: '¿Qué significa la luz verde del semáforo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Siga tan pronto aparezca la luz verde.' },
      {
        key: 'b',
        text: 'Siga, pero sólo si su pista está expedita justo después del cruce.',
      },
      { key: 'c', text: 'Siga después de mirar hacia ambos lados.' },
      { key: 'd', text: 'Siga.' },
    ],
    correct: ['b'],
  },
  {
    id: 267,
    text: '¿Cuándo no debería usted detenerse al ponerse el semáforo en amarillo?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Cuando la luz cambia sorpresivamente.' },
      { key: 'b', text: 'Cuando va demasiado rápido.' },
      { key: 'c', text: 'Cuando ya ha ingresado al cruce.' },
      {
        key: 'd',
        text: 'Cuando está tan cerca del cruce que su detención puede ocasionar un accidente.',
      },
    ],
    correct: ['c', 'd'],
  },
  {
    id: 268,
    text: 'Usted se encuentra en el lugar de un accidente. ¿Qué hace para ayudar de mejor forma a una persona herida que está con una fuerte hemorragia en la parte inferior de una pierna?',
    instruction: 'Marque dos respuestas',
    type: 'multiple',
    selectCount: 2,
    options: [
      {
        key: 'a',
        text: 'La sienta y le da a beber algo caliente para tranquilizarla.',
      },
      {
        key: 'b',
        text: 'La mantiene tendida con la pierna herida en alto.',
      },
      {
        key: 'c',
        text: 'Aplica presión manual firme sobre la herida con un paño limpio y luego la venda.',
      },
      {
        key: 'd',
        text: 'La sienta y espera a que llegue una ambulancia.',
      },
      {
        key: 'e',
        text: 'Le conversa tranquilamente ayudándola a mantenerse de pie.',
      },
    ],
    correct: ['b', 'c'],
  },
  {
    id: 269,
    text: 'Excepcionalmente, un joven de 17 años puede obtener licencia de conducir clase B. En tanto no cumpla 18 años deberá conducir siempre acompañado. ¿Qué requisitos debe cumplir su acompañante?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Debe ir siempre sentado en el asiento delantero.' },
      { key: 'b', text: 'Debe ser mayor de 35 años.' },
      { key: 'c', text: 'Debe ser egresado de enseñanza media.' },
      {
        key: 'd',
        text: 'Debe haber efectuado un curso especial en una escuela de conductores.',
      },
      {
        key: 'e',
        text: 'Debe poseer una licencia de conducir, que le permita conducir vehículos de la clase B, de a lo menos 5 años de antigüedad.',
      },
    ],
    correct: ['a', 'e'],
  },
  {
    id: 270,
    text: 'Usted se ve involucrado en un accidente. Un pasajero del otro vehículo ha resultado con lesiones leves. ¿Debe usted informar el hecho a la policía?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Sí, debe dar cuenta del hecho a la policía dentro de los próximos 20 días.',
      },
      {
        key: 'b',
        text: 'No, el pasajero lesionado debe decidir si se informa a la policía o no.',
      },
      {
        key: 'c',
        text: 'No, los accidentes en que sólo resultan lesionados leves no se informan a la policía.',
      },
      {
        key: 'd',
        text: 'Sí, debe dar cuenta del hecho a la autoridad policial más inmediata a la brevedad.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 271,
    text: 'Usted se ha detenido en el lugar de un accidente para prestar ayuda. ¿Qué debería hacer usted?',
    instruction: 'Marque tres respuestas',
    type: 'multiple',
    selectCount: 3,
    options: [
      {
        key: 'a',
        text: 'Mantener a las personas lesionadas en movimiento haciéndolas caminar.',
      },
      {
        key: 'b',
        text: 'Dar a las personas heridas algo caliente para beber.',
      },
      {
        key: 'c',
        text: 'Mantener abrigadas y cómodas a las personas heridas.',
      },
      {
        key: 'd',
        text: 'Mantener tranquilas a las personas heridas hablándoles alentadoramente.',
      },
      {
        key: 'e',
        text: 'Asegurarse de que no queden solos los heridos.',
      },
    ],
    correct: ['c', 'd', 'e'],
  },
  {
    id: 272,
    text: 'Usted es el primero en llegar al sitio de un accidente. ¿Qué debería hacer usted?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Encender sus luces de advertencia de peligro para alertar a los demás conductores.',
      },
      {
        key: 'b',
        text: 'Asegurarse de que los motores de los vehículos involucrados estén apagados.',
      },
      {
        key: 'c',
        text: 'Abandonar el lugar tan pronto llegue otro conductor.',
      },
      {
        key: 'd',
        text: 'Ayudar a salir a las personas ilesas de los vehículos.',
      },
    ],
    correct: ['a', 'b', 'd'],
  },
  {
    id: 273,
    text: 'Usted es el primero en llegar al lugar de un accidente en el que hay heridos graves. ¿Qué hace usted?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Enciende sus luces de advertencia de peligro.' },
      {
        key: 'b',
        text: 'Se asegura de que alguien llame al 133 de Carabineros.',
      },
      { key: 'c', text: 'Intenta que los heridos beban algo.' },
      { key: 'd', text: 'Saca de los autos a los heridos.' },
    ],
    correct: ['a', 'b'],
  },
  {
    id: 274,
    text: 'Usted llega al lugar de un accidente en el que participó un camión cargado con productos químicos peligrosos. ¿Qué debería hacer usted antes de llamar al 133 de Carabineros?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Tratar de mover el camión.' },
      {
        key: 'b',
        text: 'Tratar de diluir los productos químicos con agua.',
      },
      {
        key: 'c',
        text: 'Averiguar de qué clase de producto químico se trata mirando los rótulos y letreros que tiene el camión.',
      },
      {
        key: 'd',
        text: 'Tratar de evitar que los productos químicos se sigan derramando.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 275,
    text: 'Usted llega al lugar de un accidente en el que ha participado un motociclista. El motociclista yace consciente, pero en estado de shock. ¿De qué debería asegurarse usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Que el motociclista se saque el casco.' },
      { key: 'b', text: 'Que el motociclista no se saque el casco.' },
      {
        key: 'c',
        text: 'Que al motociclista se le ayude a ponerse de pie.',
      },
      { key: 'd', text: 'Que al motociclista se le dé algo para beber.' },
    ],
    correct: ['b'],
  },
  {
    id: 276,
    text: 'Usted va por una autopista. De un camión cargado que va delante suyo cae una caja sin que su conductor se dé cuenta. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Trata de alcanzar al camión y de llamar la atención de su conductor.',
      },
      {
        key: 'b',
        text: 'Se detiene junto a la caja y enciende sus luces de emergencia hasta que llegue la policía.',
      },
      {
        key: 'c',
        text: 'Se desplaza hacia la berma y luego intenta recoger la caja.',
      },
      {
        key: 'd',
        text: 'Continúa hasta donde haya un teléfono para avisar a la policía o a los servicios de emergencia.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 277,
    text: '¿Quién o quiénes están cubiertos por el Seguro Obligatorio de Accidentes Personales?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Sólo el conductor del vehículo asegurado.' },
      { key: 'b', text: 'Sólo los pasajeros del vehículo asegurado.' },
      {
        key: 'c',
        text: 'Sólo los pasajeros y el conductor del vehículo asegurado.',
      },
      {
        key: 'd',
        text: 'El conductor, los pasajeros y cualquier tercero afectado en un accidente de tránsito en que participe el vehículo asegurado.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 278,
    text: '¿Qué documento no está obligado a portar usted siempre en su vehículo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'El Permiso de Circulación.' },
      {
        key: 'b',
        text: 'El certificado de un Seguro Obligatorio de Accidentes Personales.',
      },
      { key: 'c', text: 'Su licencia de conductor.' },
      {
        key: 'd',
        text: 'El certificado de revisión técnica o de homologación.',
      },
      {
        key: 'e',
        text: 'El certificado de inscripción en el Registro Nacional de Vehículos Motorizados.',
      },
    ],
    correct: ['e'],
  },
  {
    id: 279,
    text: 'En relación con las infracciones a las normas del tránsito, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Conducir un vehículo bajo los efectos del alcohol es una infracción gravísima.',
      },
      {
        key: 'b',
        text: 'No respetar una señal PARE es una infracción gravísima.',
      },
      {
        key: 'c',
        text: 'La comisión de una infracción gravísima es sancionada no sólo con una multa, sino que también con la suspensión de la licencia de conducir del infractor.',
      },
      {
        key: 'd',
        text: 'Solamente son infracciones gravísimas el no respetar la luz roja de un semáforo y el exceso de velocidad.',
      },
      {
        key: 'e',
        text: 'En ningún caso una licencia de conducir puede ser cancelada por el Juez.',
      },
    ],
    correct: ['a', 'b', 'c'],
  },
  {
    id: 280,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Las únicas infracciones gravísimas son el conducir bajo los efectos del alcohol y el exceso de velocidad.',
      },
      {
        key: 'b',
        text: 'Las infracciones gravísimas son sancionadas con multas y, además, con la suspensión de la licencia de conducir del infractor.',
      },
      {
        key: 'c',
        text: 'Dos infracciones graves cometidas en un período de 12 meses dan origen a una suspensión de la licencia de conducir del infractor.',
      },
      {
        key: 'd',
        text: 'No respetar el derecho preferente de paso de un peatón es una infracción leve.',
      },
      {
        key: 'e',
        text: 'No respetar una señal Ceda el Paso es una infracción gravísima si a consecuencia de la infracción se produce un accidente.',
      },
    ],
    correct: ['b', 'c', 'e'],
  },
]
