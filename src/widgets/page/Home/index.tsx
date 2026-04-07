import { Switch, cn } from "@heroui/react";
export default function Home() {
  return (
    <div className="   ">
      首页
      <Switch
        classNames={{
          startContent: cn(
            "text-white text-xs flex items-center justify-center"
          ),
          endContent: cn("text-white text-xs flex items-center justify-center"),
          label: cn("bg-transparent"), // 确保 label 不干扰
          wrapper: cn(
            "w-[60px] h-[28px] bg-[#D5D8DF] rounded-full group-data-[selected=true]:bg-green-500"
          ), // 动态背景
          thumb: cn(
            "w-[24px] h-[24px] bg-white rounded-full",
            "group-data-[selected=true]:translate-x-[13px]", // 明确启用时的滑动距离
            "group-data-[selected=false]:translate-x-[2px]", // 禁用时的初始位置
            "transition-transform"
          ),
        }}
        size="sm"
        endContent={<div>禁用</div>}
        startContent={<div>启用</div>}
        // isSelected={item.state == 0 ? true : false}
        color="success"
      // onValueChange={(val) => {

      // }}
      ></Switch>
    </div>
  );
}
