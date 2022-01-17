import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    backgroundColor: string;
    containerColor: string;
  }
}
