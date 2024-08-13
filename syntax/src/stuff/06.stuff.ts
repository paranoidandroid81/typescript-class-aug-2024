export type Employee = {
  id: string;
  name: string;
  job: "DEV" | "QA" | "MGMT";
  salary: number;
};

type UpdateableEmployee = Pick<Employee, "name" | "job">;

type EmployeeCreate = Omit<Employee, "id">;

export function hireEmployee(emp: EmployeeCreate) {
  const newEmployee: Employee = {
    id: crypto.randomUUID(),
    ...emp,
  };
  return newEmployee;
}

export function updateSomeOfTheEmployee(
  id: string,
  emp: Partial<UpdateableEmployee>
) {}

type EmployeeKeys = keyof Employee;
export function updateSomePropertyOfTheEmployee(
  prop: EmployeeKeys,
  emp: Employee,
  newValue: string
) {
  // but the prop has to be a specific key of the employee type
}

export type Actor = {
  name?: string;
  age?: number;
};

export function saveActorForNow(actor: Actor) {}

export function saveActorForRealz(actor: Required<Actor>) {}

export type BankTransaction =
  | {
      kind: "Deposit";
      amount: number;
    }
  | {
      kind: "Withdrawal";
      amount: number;
    };

export function doTransaction(accountNumber: string, tx: BankTransaction) {}
