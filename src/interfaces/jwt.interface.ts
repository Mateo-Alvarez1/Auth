export class JwtPayload {
  // Si bien podemos directamente recibir las propiedades en crudo dentro de mis parametros,
  // Te permite expander mejor las propiedades si lo manejamos como un objeto en una interface
  id: string;
}
