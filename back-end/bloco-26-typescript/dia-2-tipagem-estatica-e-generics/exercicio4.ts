import Pizza from "./exercicio3";

type CommonFlavors = 'Calabresa' | 'Frango' | 'Pepperoni';

type VegetarianFlavors = 'Marguerita' | 'Palmito' | 'Colgumelo';

type SweetFlavors = 'Nutela' | 'Goiabada com queijo' | 'Marshmallow';

interface CommonPizza extends Pizza {
  flavor: CommonFlavors;
}

interface VegetarianPizza extends Pizza {
  flavor: VegetarianFlavors;
}

interface SweetPizza extends Pizza {
  flavor: SweetFlavors;
  slices: 4;
}

const commonPizza1: CommonPizza = {
  flavor: 'Calabresa',
  slices: 4
}

const commonPizza2: CommonPizza = {
  flavor: 'Frango',
  slices: 6
}

const commonPizza3: CommonPizza = {
  flavor: 'Pepperoni',
  slices: 8
}

const vegetarianPizza1: VegetarianPizza = {
  flavor: 'Marguerita',
  slices: 8
};

const vegetarianPizza2: VegetarianPizza = {
  flavor: 'Colgumelo',
  slices: 4
};

const sweetPizza1: SweetPizza = {
  flavor: 'Goiabada com queijo',
  slices: 4
}