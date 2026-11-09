const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0 || multiplier) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (value === true) {
    return "Active";
  } else return "Inactive";
};

type Coordinate = readonly [number, number, string];

const formatCoordinate = (coordinate: Coordinate): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];

  for (const array of arrays) {
    result.push(...array);
  }

  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Access Granted";
};
